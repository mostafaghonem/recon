/* eslint-disable no-param-reassign */
const model = require('../Models');

const getUnitsAvailbility = ({ unitsIds, availableFrom, availableTo }) => {
  return unitsIds.map(o => ({
    _id: o,
    value: true
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
  numberOfPeople,
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
    status: accepted,
    isHidden: false,
    isArchived: false
  };
  if (key && key !== '') {
    query.$or = [
      {
        'address.street': { $regex: key, $options: 'i' }
      },
      {
        'address.nearTo': { $regex: key, $options: 'i' }
      },
      {
        'address.highlight': { $regex: key, $options: 'i' }
      }
    ];
  }
  if (government) query['address.government'] = String(government);
  if (services) query.services = { $in: services };
  if (rate) query.rate = { $gte: Number(rate) };
  if (type) query.type = type;
  if (rentersType) query.rentersType = rentersType;
  if (numberOfPeople) {
    query.numberOfPeople = { $gte: Number(numberOfPeople) };
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
    const unitsAvailbility = await getUnitsAvailbility({
      unitsIds,
      availableFrom,
      availableTo
    });

    let filteredUnits = units;

    if (available === 1) {
      filteredUnits = unitsAvailbility
        .map(o => ({ ...units.find(p => p._id === o._id), available: o.value }))
        .filter(unit => unit.available);
    }

    return filteredUnits;
  }
  return [];
};
