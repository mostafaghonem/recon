// const model = require('../Models');
const { HostelReservationEntity } = require('../Entity');

// eslint-disable-next-line no-unused-vars
module.exports = ({ logger, publisher }) => async ({ payload }) => {
  const publisherClient = publisher.createClient({
    no_ready_check: true,
    host: process.env.REDIS_HOST,
    auth_pass: process.env.REDIS_PASS
  });

  const reservationCachedData = payload.reservation;

  // logger.info(reservationCachedData);
  const newReservation = new HostelReservationEntity({
    fromts: reservationCachedData.fromTs,
    hostelId: reservationCachedData.hostelId,
    renterId: reservationCachedData.renterId,
    reserveDatets: reservationCachedData.reserveDateTs,
    rooms: reservationCachedData.rooms,
    shouldPayPrice: reservationCachedData.totalAfterExtras,
    totalPrice: reservationCachedData.total,
    totalReservedCount: reservationCachedData.totalReservedCount,
    tots: reservationCachedData.toTs
  });

  await newReservation.save();

  publisherClient.publish(
    'hostel-reservation-complete-payment',
    JSON.stringify({
      hostelId: newReservation.hostelId,
      totalOnlineBooking: newReservation.totalReservedCount,
      totalRevenue: newReservation.total
    })
  );

  publisherClient.quit();

  logger.info(
    `new Hostel reservation is completed${JSON.stringify(
      newReservation.TO_JSON(),
      undefined,
      4
    )}`
  );
};
