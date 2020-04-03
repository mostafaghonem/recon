const model = require('../Models');

/**
 * @description check user login data and return login token if user is exist and verified
 * @param {Object} of {String} phone, {String} password, {String} agent
 * @returns {token} if user found or {error} if not
 * @memberof use-cases
 */

// should have no implementation for any specific orm
module.exports = ApplicationError => async ({
  userId,
  status,
  key,
  lastId,
  limit
}) => {
  const rest = {};

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
  const { units, total, hasNext } = await model.getMyUnits(
    userId,
    lastId,
    limit,
    rest
  );

  if (!units) {
    throw new ApplicationError('Unable to get user own units');
  }

  if (units && units.length !== 0) {
    return { data: units, hasNext, total };
  }
  return { data: [], total: 0, hasNext: false };
};
