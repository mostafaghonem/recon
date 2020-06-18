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
  getOfficesFavorability,
  accepted
}) => async ({
  userId,
  lastId,
  availableFrom,
  availableTo,
  Type,
  government,
  numberOfPersons,
  freeServices,
  generalServices,
  officeServices,
  entertainmentServices,
  available,
  priceFrom,
  priceTo,
  rate,
  key,
  limit
}) => {
  let officesFavorability = {};
  const query = {
    _id: { $gt: lastId },
    name: { $regex: key, $options: 'i' },
    status: accepted,
    isHidden: false,
    isArchived: false
  };
  if (government)
    query['address.government'] = String(government).toLowerCase();
  if (freeServices) query.freeServices = { $all: freeServices };
  if (generalServices) query.generalServices = { $all: generalServices };
  if (officeServices) query.officeServices = { $all: officeServices };
  if (entertainmentServices)
    query.entertainmentServices = { $all: entertainmentServices };
  if (rate) query.rate = { $gte: Number(rate) };
  const select = 'name image rate totalUsersRated offices address.government';
  const sort = { createdAt: 1 };
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
    const reservedOffices = await getReservedOfficeCountByOffices(
      officesIds,
      availableFrom,
      availableTo
    );

    let filteredOffices = [];
    offices.forEach(office => {
      office.totalOffices = 0;
      office.totalAvailableOffices = 0;
      office.available = false;
      office.offices = office.offices.filter(
        group =>
          group.numberOfPersons >= (Number(numberOfPersons) || 0) &&
          group.pricePerPerson >= (Number(priceFrom) || 0) &&
          group.pricePerPerson <= (Number(priceTo) || 10000000000)
      );
      if (Type)
        office.offices = office.offices.filter(
          group =>
            String(group.Type).toLowerCase() === String(Type).toLowerCase()
        );
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
        filteredOffices.push(office);
      }
    });
    if (available)
      filteredOffices = filteredOffices.filter(hosetl => hosetl.available);

    if (userId) {
      officesFavorability = await getOfficesFavorability({
        userId,
        officesIds
      });

      filteredOffices = filteredOffices.map(o => {
        const displayFavorite = true;
        let favorite = false;

        if (officesFavorability[o._id.toString()]) {
          favorite = true;
        }
        return {
          ...JSON.parse(JSON.stringify(o)),
          favorite,
          displayFavorite
        };
      });
    }
    return filteredOffices;
  }
  return [];
};
