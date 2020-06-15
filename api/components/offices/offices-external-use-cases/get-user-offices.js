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
  getReservedOfficeCountByOffices
}) => async ({ userId, lastId, status, key, limit }) => {
  const query = {
    _id: { $gt: lastId },
    name: { $regex: key, $options: 'i' },
    userId,
    status,
    isArchived: false
  };
  const select =
    'name image status currency address offices rate totalUsersRated totalOnlineBooking totalBooking totalRevenue note';
  let sort = { createdAt: 1 };
  if (status !== 'pending') sort = { updatedAt: -1 };
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
    offices.forEach(office => {
      if (office.status === 'accepted') {
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
                officee => String(officee.groupId) === String(group._id)
              );
              if (getGroupData[0]) {
                office.totalOffices += Number(group.totalOffices);
                office.totalAvailableOffices +=
                  Number(group.totalOffices) -
                  Number(getGroupData[0].totalReservedCount);
                group.availableOffices =
                  Number(group.totalOffices) -
                  Number(getGroupData[0].totalReservedCount);
                if (office.totalOffices > 0) office.available = true;
              }
            } else {
              office.totalOffices += Number(group.totalOffices);
              office.totalAvailableOffices += Number(
                group.totalAvailableOffices
              );
              if (office.totalOffices > 0) office.available = true;
            }
          });
        }
      } else {
        office.totalOffices = 0;
        office.totalAvailableOffices = 0;
        office.available = false;
      }
    });
  }

  return offices;
};
