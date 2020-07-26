/* eslint-disable no-param-reassign */
const model = require('../Models');

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
  moment,
  GetSortObj,
  getDivisionsFavorability,
  GetDivisionsAvailbility,
  accepted
}) => async ({
  userId,
  availableFrom = moment().toDate(),
  availableTo = moment(),
  type,
  rentersType,
  government,
  numberOfPeople,
  services,
  available,
  furniture,
  recommended,
  priceFrom,
  priceTo,
  rate,
  key,
  limit,
  sortIndex,
  sortKey,
  sortValue
}) => {
  let divisionsFavorability = {};
  let divisionsAvailbility = {};
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
    query.pricePerPerson = { $gte: parseInt(priceFrom, 10) };
  }

  if (typeof priceTo !== 'undefined') {
    // eslint-disable-next-line no-restricted-globals
    const from = isNaN(priceFrom) ? 0 : parseInt(priceFrom, 10);
    // eslint-disable-next-line no-restricted-globals
    const validTo = !isNaN(priceTo) && parseInt(priceTo, 10) > from;
    if (validTo) {
      query.pricePerPerson = { $lte: parseInt(priceTo, 10), $gte: from };
    }
  }

  if (available) {
    query.isFull = false;
  }

  if (furniture && parseInt(furniture, 10) === 1) {
    query.hasFurniture = true;
  } else if (furniture && parseInt(furniture, 10) === 2) {
    query.hasFurniture = false;
  }

  const select =
    'type image gallery dailyOrMonthly pricePerPerson status note rates totalRate totalUsersRated address totalRate totalUsersRated totalOnlineBooking totalRevenue numberOfPeople numberOfRooms availableCountNow hasFurniture rentersType isEditing isFull createdAt updatedAt';
  const sort = sortObj.sort;
  const { divisions, total, hasNext } = await model.getDivisions({
    query,
    select,
    sort,
    limit
  });
  if (divisions && divisions.length !== 0) {
    const divisionsIds = [];
    divisions.map(division => divisionsIds.push(division._id));
    divisionsAvailbility = await GetDivisionsAvailbility({
      divisionsIds,
      availableFrom,
      availableTo
    });

    let filteredDivisions = divisions;
    filteredDivisions = divisions.map(o => {
      const divisionAvailbility = divisionsAvailbility[o._id.toString()];
      const division = JSON.parse(JSON.stringify(o));
      division.available = divisionAvailbility
        ? divisionAvailbility.value
        : true;
      return division;
    });

    if (available) {
      filteredDivisions = filteredDivisions.filter(
        division => division.available
      );
    }

    if (recommended) {
      filteredDivisions = filteredDivisions.filter(
        division => division.available
      );
    }

    if (userId) {
      divisionsFavorability = await getDivisionsFavorability({
        userId,
        divisionsIds
      });

      filteredDivisions = filteredDivisions.map(o => {
        const displayFavorite = true;
        let favorite = false;

        if (divisionsFavorability[o._id.toString()]) {
          favorite = true;
        }
        return {
          ...o,
          favorite,
          displayFavorite
        };
      });
    }

    return { total, hasNext, divisions: filteredDivisions };
  }
  return { total: 0, hasNext: false, divisions: [] };
};
