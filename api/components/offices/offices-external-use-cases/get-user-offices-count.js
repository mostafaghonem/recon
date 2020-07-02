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
    $or: [{ status: 'accepted' }, { status: 'pending' }],
    isArchived: false
  };
  const officesData = {
    count: 0,
    revenue: 0
  };
  const userOffices = await model.getMany({ query, select: 'totalRevenue' });
  if (userOffices && userOffices.length !== 0) {
    officesData.count = userOffices.length;
    officesData.revenue =
      userOffices.reduce((a, b) => ({
        totalRevenue: a.totalRevenue + b.totalRevenue
      })).totalRevenue || 0;
  }

  return officesData;
};
