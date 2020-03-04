const model = require('../Models');

/**
 * @description check user login data and return login token if user is exist and verified
 * @param {Object} of {String} phone, {String} password, {String} agent
 * @returns {token} if user found or {error} if not
 * @memberof use-cases
 */

// should have no implementation for any specific orm
module.exports = ApplicationError => async ({ userId, lastId, limit }) => {
  const { units, hasNext } = await model.getMyUnits(userId, lastId, limit);

  if (!units) {
    throw new ApplicationError('Unable to get user own units');
  }

  if (units && units.length !== 0) {
    return { data: units, hasNext };
  }
  return { data: [], hasNext: false };
};
