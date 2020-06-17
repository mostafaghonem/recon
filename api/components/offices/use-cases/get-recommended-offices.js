const model = require('../models');

/**
 * @description check user login data and return login token if user is exist and verified
 * @param {Object} of {String} phone, {String} password, {String} agent
 * @returns {token} if user found or {error} if not
 * @memberof use-cases
 */

// should have no implementation for any specific orm
module.exports = ({
  ApplicationError,
  logger,
  getReservedOfficeCountByOffices,
  accepted
}) => async ({ limit }) => {
  const query = {
    status: accepted,
    isHidden: false,
    isArchived: false
  };

  const select =
    'name image rate totalUsersRated offices address.government createdAt';
  const sort = { createdAt: -1 };
  const offices = await model.getMany({
    query,
    select,
    sort,
    skip: 0,
    limit
  });
  if (offices && offices.length !== 0) {
    const officesIds = [];
    offices.map(office => officesIds.push(office._id));
    const availableFrom = new Date().getTime();
    const availableTo = new Date().setDate(new Date().getDate() + 1);
    const reservedOffices = await getReservedOfficeCountByOffices(
      officesIds,
      availableFrom,
      new Date(availableTo).getTime()
    );
    let filteredOffices = [];
    offices.forEach(office => {
      office.totalOffices = 0;
      office.totalAvailableOffices = 0;
      office.available = false;
      if (office.offices[0]) {
        const getOfficeData = reservedOffices.filter(
          reservedOffice => String(reservedOffice._id) === String(office._id)
        );
        office.offices.forEach(group => {
          if (getOfficeData[0]) {
            const getGroupData = getOfficeData[0].offices.filter(
              officeee => String(officeee.groupId) === String(group._id)
            );
            if (getGroupData[0]) {
              office.totalOffices += Number(group.totalOffices);
              office.totalAvailableOffices +=
                Number(group.totalOffices) -
                Number(getGroupData[0].totalReservedCount);
              group.availableOffices =
                Number(group.totalOffices) -
                Number(getGroupData[0].totalReservedCount);
              if (group.availableOffices > 0) {
                group.available = true;
                office.available = true;
              }
            }
          } else {
            office.totalOffices += Number(group.totalOffices);
            office.totalAvailableOffices += Number(group.totalAvailableOffices);
            group.availableOffices = Number(group.totalAvailableOffices);
            if (group.availableOffices > 0) {
              group.available = true;
              office.available = true;
            } else group.available = false;
          }
        });
      }
      filteredOffices.push(office);
    });
    filteredOffices = filteredOffices.filter(hosetl => hosetl.available);

    return filteredOffices;
  }
  return [];
};
