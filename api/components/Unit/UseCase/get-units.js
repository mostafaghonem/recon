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
  const select = 'name image rate totalUsersRated rooms address.government';
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
      filteredUnits = unitsAvailbility.filter(hosetl => hosetl.value);
    }

    return filteredUnits;
  }
  return [];
};
