const model = require('../models');

/**
 * @description check user login data and return login token if user is exist and verified
 * @param {Object} of {String} phone, {String} password, {String} agent
 * @returns {token} if user found or {error} if not
 * @memberof use-cases
 */

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger }) => async ({ userId }) => {
  const query = {
    userId,
    isArchived: false
  };
  const hostelsData = {
    count: 0,
    revenue: 0
  };
  const userHostels = await model.getMany({ query, select: 'totalRevenue' });
  if (userHostels && userHostels.length !== 0) {
    hostelsData.count = userHostels.length;
    hostelsData.revenue =
      userHostels.reduce((a, b) => ({
        totalRevenue: a.totalRevenue + b.totalRevenue
      })).totalRevenue || 0;
  }

  return hostelsData;
};
