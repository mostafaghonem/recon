// const model = require('../Models');
const { HostelReservationEntity } = require('../Entity');

// eslint-disable-next-line no-unused-vars
module.exports = ({ redis, logger, publisher }) => async paymentId => {
  const publisherClient = publisher.createClient({
    no_ready_check: true,
    host: process.env.REDIS_HOST,
    auth_pass: process.env.REDIS_PASS
  });

  let reservationCachedData = await redis.getAsync(`${paymentId}-paymentId`);

  reservationCachedData = JSON.parse(reservationCachedData);

  // logger.info(reservationCachedData);
  const newReservation = new HostelReservationEntity({
    fromts: reservationCachedData.fromts,
    hostelId: reservationCachedData.hostelId,
    renterId: reservationCachedData.renterId,
    reserveDatets: reservationCachedData.reserveDatets,
    rooms: reservationCachedData.rooms,
    shouldPayPrice: reservationCachedData.shouldPayPrice,
    totalPrice: reservationCachedData.totalPrice,
    totalReservedCount: reservationCachedData.totalReservedCount,
    tots: reservationCachedData.tots
  });

  await newReservation.save();

  publisherClient.publish(
    'hostel-reservation-complete-payment',
    JSON.stringify({
      hostelId: newReservation.hostelId,
      totalOnlineBooking: newReservation.totalReservedCount,
      totalRevenue: newReservation.shouldPayPrice
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
