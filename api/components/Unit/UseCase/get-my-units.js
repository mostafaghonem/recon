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
  GetSortObj,
  getMyUploadedUnitsRequests
}) => async ({ userId, status, key, limit, sortIndex, sortValue, sortKey }) => {
  const sortObj = GetSortObj({
    sortIndex,
    sortKey,
    sortValue
  });
  const rest = sortObj.query[0] || sortObj.query;

  if (status) {
    rest.status = status;
  }

  if (key && key !== '') {
    rest.$or = [
      {
        'address.street': { $regex: key, $options: 'i' }
      },
      {
        'address.nearTo': { $regex: key, $options: 'i' }
      },
      {
        'address.highlight': { $regex: key, $options: 'i' }
      },
      {
        'address.government': { $regex: key, $options: 'i' }
      }
    ];
  }
  const unitsObj = await model.getMyUnits(userId, limit[0], rest, sortObj.sort);

  const requestsObj =
    status === 'accepted'
      ? { data: [], hasNext: false }
      : await getMyUploadedUnitsRequests({
          userId,
          limit: limit[1],
          rest,
          sortObj
        });

  if (!unitsObj || (unitsObj && !unitsObj.units)) {
    throw new ApplicationError('Unable to get user own units');
  }

  if (unitsObj.units && unitsObj.units.length !== 0) {
    return { units: unitsObj, requests: requestsObj };
  }
  return {
    requests: requestsObj,
    units: { data: [], total: 0, hasNext: false }
  };
};
