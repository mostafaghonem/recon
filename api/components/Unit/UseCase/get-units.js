/* eslint-disable no-param-reassign */
const model = require('../Models');

const getUnitsAvailbility = ({ unitIds, availableFrom, availableTo }) => {
  return unitIds.map(o => ({
    _id: o,
    available: true
  }));
};

/**
 * @description check user login data and return login token if user is exist and verified
 * @param {Object} of {String} phone, {String} password, {String} agent
 * @returns {token} if user found or {error} if not
 * @memberof use-cases
 */

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger, accepted }) => async ({
  lastId,
  availableFrom,
  availableTo,
  type,
  rentersType,
  government,
  numberOfPersons,
  services,
  available,
  priceFrom,
  priceTo,
  rate,
  key,
  limit
}) => {
  const query = {
    _id: { $gt: lastId },
    name: { $regex: key, $options: 'i' },
    status: accepted,
    isFull: false,
    isHidden: false,
    isArchived: false
  };
  if (government)
    query['address.government'] = String(government).toLowerCase();
  if (services) query.services = { $all: services };
  if (rate) query.rate = { $gte: Number(rate) };
  if (type) query.type = type;
  if (rentersType) query.rentersType = rentersType;
  if (numberOfPersons) {
    query.numberOfPersons = { $gte: Number(numberOfPersons) };
  }

  if (available === 1) {
    query.isFull = false;
  } else if (available === 2) {
    query.hasFurniture = true;
  } else if (available === 3) {
    query.hasFurniture = false;
  }

  const select =
    'type image gallery dailyOrMonthly pricePerPerson status note rates totalRate totalUsersRated address totalRate totalUsersRated totalOnlineBooking totalRevenue numberOfPeople numberOfRooms availableCountNow hasFurniture rentersType isFull';
  const sort = { createdAt: 1 };
  const units = await model.getMany({
    query,
    select,
    sort,
    skip: 0,
    limit
  });
  if (units && units.length !== 0) {
    const unitsIds = [];
    units.map(unit => unitsIds.push(unit._id));
    const unitsAvailbility = await getUnitsAvailbility(
      unitsIds,
      availableFrom,
      availableTo
    );

    let filteredUnits = [];

    if (available === 1) {
      filteredUnits = unitsAvailbility
        .map(o => ({ ...units.find(p => p._id === o._id), available: o.value }))
        .filter(unit => unit.available);
    }

    return filteredUnits;
  }
  return [];
};
