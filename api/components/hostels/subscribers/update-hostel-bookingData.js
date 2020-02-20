const model = require('../models');

/**
 * @description check user login data and return login token if user is exist and verified
 * @param {Object} of {String} phone, {String} password, {String} agent
 * @returns {token} if user found or {error} if not
 * @memberof use-cases
 */

// should have no implementation for any specific orm
module.exports = ({ logger, ApplicationError, redis, accepted }) => {
  redis.on('message', async (channel, message) => {
    if (channel !== 'hostel-reservation-complete-payment') return;
    const parsed = JSON.parse(message);
    const { hostelId, totalOnlineBooking, totalRevenue } = parsed;

    logger.info(
      `Update-hostel-bookingData called with ${JSON.stringify(
        parsed,
        undefined,
        4
      )}`
    );

    const query = { _id: hostelId, status: accepted, isArchived: false };
    const select = 'totalOnlineBooking totalRevenue';
    const checkExistence = await model.getOne({ query, select });
    if (!checkExistence)
      throw new ApplicationError(
        '.نأسف ، لا يمكننا العثور على هذا الفندق',
        403
      );
    const update = {
      totalOnlineBooking:
        checkExistence.totalOnlineBooking + Number(totalOnlineBooking),
      totalRevenue: checkExistence.totalRevenue + Number(totalRevenue)
    };
    await model.updateOneById({
      id: hostelId,
      update
    });
  });
};
