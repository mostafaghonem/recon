const model = require('../models');
const {
  EVENTS_TYPES,
  OBJECTS_TYPES
} = require('../../../shared/constants/defaults');

// should have no implementation for any specific orm
module.exports = ({ logger, redis, createEvent, getUsersByIds }) => {
  // ! subscripe to the event
  redis.subscribe('hostel-reservation-complete-payment');

  // !subscripe to messages
  redis.on('message', async (channel, message) => {
    if (channel !== 'hostel-reservation-complete-payment') return;
    const parsed = JSON.parse(message);
    const {
      hostelId,
      totalOnlineBooking,
      totalRevenue,
      renterId,
      totalReservedCount
    } = parsed;

    const hostel = await model.getOneById({
      id: hostelId,
      select: 'userId name'
    });

    const users = await getUsersByIds([hostel.userId]);

    createEvent({
      type: EVENTS_TYPES.HOSTELS_RESERVATION_COMPLETE_PAYMENT,
      userId: users[renterId].renterId,
      username: users[renterId].fullName,
      message: `
      قام بحجز عدد غرق -
      ${totalReservedCount}
       - في فندق
      `,
      objectId: hostelId,
      objectName: hostel.name,
      objectType: OBJECTS_TYPES.HOSTEL
    });

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
