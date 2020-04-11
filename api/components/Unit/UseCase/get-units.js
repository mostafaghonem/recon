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
module.exports = ({
  ApplicationError,
  logger,
  GetSortObj,
  accepted
}) => async ({
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
  limit,
  sortIndex,
  sortKey,
  sortValue
}) => {
  const sortObj = GetSortObj({
    sortIndex,
    sortKey,
    sortValue
  });
  const query = {
    ...sortObj.query,
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
  if (rate) query.rate = { $gte: parseInt(rate, 10) };
  if (type) query.type = type;
  if (rentersType) query.rentersType = rentersType;
  if (numberOfPeople) {
    query.numberOfPeople = { $gte: parseInt(numberOfPeople, 10) };
  }

  if (typeof priceFrom !== 'undefined') {
    query.numberOfPeople = { $gte: parseInt(priceFrom, 10) };
  }

  if (typeof priceTo !== 'undefined') {
    // eslint-disable-next-line no-restricted-globals
    const from = isNaN(priceFrom) ? 0 : parseInt(priceFrom, 10);
    // eslint-disable-next-line no-restricted-globals
    const validTo = !isNaN(priceTo) && parseInt(priceTo, 10) > from;
    if (validTo) {
      query.numberOfPeople = { $lte: parseInt(priceTo, 10), $gte: from };
    }
  }

  if (available && parseInt(available, 10) === 1) {
    query.isFull = false;
  } else if (available && parseInt(available, 10) === 2) {
    query.hasFurniture = true;
  } else if (available && parseInt(available, 10) === 3) {
    query.hasFurniture = false;
  }

  const select =
    'type image gallery dailyOrMonthly pricePerPerson status note rates totalRate totalUsersRated address totalRate totalUsersRated totalOnlineBooking totalRevenue numberOfPeople numberOfRooms availableCountNow hasFurniture rentersType isEditing isFull createdAt updatedAt';
  const sort = sortObj.sort;
  const { units, total, hasNext } = await model.getUnits({
    query,
    select,
    sort,
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
    return { total, hasNext, units: filteredUnits };
  }
  return { total: 0, hasNext: false, units: [] };
};
