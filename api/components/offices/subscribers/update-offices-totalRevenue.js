const model = require('../models');

// should have no implementation for any specific orm
module.exports = ({ logger, redis }) => {
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

    const update = {
      $inc: {
        totalRevenue,
        totalOnlineBooking,
        totalBooking: totalOnlineBooking
      }
    };
    await model.updateOneById({
      id: officeId,
      update
    });
  });
};
