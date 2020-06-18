const model = require('../models');

/**
 * @description check user login data and return login token if user is exist and verified
 * @param {Object} of {String} phone, {String} password, {String} agent
 * @returns {token} if user found or {error} if not
 * @memberof use-cases
 */

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger, getUserOffices }) => async ({
  lastId,
  status,
  userId,
  key,
  limit
}) => {
  const offices =
    (await getUserOffices({
      userId,
      lastId,
      status,
      key,
      limit
    })) || [];

  return offices;
};