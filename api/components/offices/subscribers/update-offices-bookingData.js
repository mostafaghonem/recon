const model = require('../models');

/**
 * @description check user login data and return login token if user is exist and verified
 * @param {Object} of {String} phone, {String} password, {String} agent
 * @returns {token} if user found or {error} if not
 * @memberof use-cases
 */

// should have no implementation for any specific orm
module.exports = ({ logger, ApplicationError, redis, accepted }) => {
  // ! subscripe to the event
  redis.subscribe('office-reservation-complete-payment');

  // !subscripe to messages
  redis.on('message', async (channel, message) => {
    if (channel !== 'office-reservation-complete-payment') return;
    const parsed = JSON.parse(message);
    const { officeId, totalOnlineBooking, totalRevenue } = parsed;

    logger.info(
      `Update-office-bookingData called with ${JSON.stringify(
        parsed,
        undefined,
        4
      )}`
    );

    const query = { _id: officeId, status: accepted, isArchived: false };
    const select = 'totalOnlineBooking totalRevenue';
    const checkExistence = await model.getOne({ query, select });
    if (!checkExistence)
      throw new ApplicationError(
        '.نأسف ، لا يمكننا العثور على هذا المكتب',
        403
      );
    const update = {
      totalOnlineBooking:
        checkExistence.totalOnlineBooking + Number(totalOnlineBooking),
      totalRevenue: checkExistence.totalRevenue + Number(totalRevenue)
    };
    await model.updateOneById({
      id: officeId,
      update
    });
  });
};
