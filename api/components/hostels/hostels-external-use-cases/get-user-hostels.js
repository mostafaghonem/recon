const model = require('../models');

/**
 * @description check user login data and return login token if user is exist and verified
 * @param {Object} of {String} phone, {String} password, {String} agent
 * @returns {token} if user found or {error} if not
 * @memberof use-cases
 */

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger }) => async ({
  userId,
  lastId,
  status,
  key,
  limit
}) => {
  const query = {
    _id: { $gt: lastId },
    name: { $regex: key, $options: 'i' },
    userId,
    status,
    isArchived: false
  };
  const select =
    'name image status address totalRate totalUsersRated totalOnlineBooking totalRevenue note';
  let sort = { createdAt: 1 };
  if (status !== 'pending') sort = { updatedAt: -1 };
  const hostels = await model.getMany({
    query,
    select,
    sort,
    skip: 0,
    limit
  });

  return hostels;
};
