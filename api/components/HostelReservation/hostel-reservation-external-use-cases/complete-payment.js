// const model = require('../Models');
const { HostelReservationEntity } = require('../Entity');

// eslint-disable-next-line no-unused-vars
module.exports = ({ redis, logger }) => async paymentId => {
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

  redis.publish(
    'hostel-reservation-complete-payment',
    JSON.stringify({
      hostelId: newReservation.hostelId,
      totalOnlineBooking: 1,
      totalRevenue: newReservation.shouldPayPrice
    })
  );

  logger.info(
    `new Hostel reservation is completed${JSON.stringify(
      newReservation.TO_JSON(),
      undefined,
      4
    )}`
  );
};
