const model = require('../models');

/**
 * @description check user login data and return login token if user is exist and verified
 * @param {Object} of {String} phone, {String} password, {String} agent
 * @returns {token} if user found or {error} if not
 * @memberof use-cases
 */

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger }) => async ({ userId }) => {
  const filter = {
    userId,
    isArchived: false
  };
  const hostelsCount = await model.count({ filter });

  return hostelsCount;
};
