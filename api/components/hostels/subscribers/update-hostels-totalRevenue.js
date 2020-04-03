const model = require('../models');

// should have no implementation for any specific orm
module.exports = ({ logger, redis }) => {
  // ! subscripe to the event
  redis.subscribe('hostel-reservation-complete-payment');

  // !subscripe to messages
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

    const update = {
      $inc: {
        totalRevenue,
        totalOnlineBooking,
        totalBooking: totalOnlineBooking
      }
    };
    await model.updateOneById({
      id: hostelId,
      update
    });
  });
};
