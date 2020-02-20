// const model = require('../Models');
const { HostelReservationEntity } = require('../Entity');

// eslint-disable-next-line no-unused-vars
module.exports = ({
  redis,
  logger,
  updateHostelBookingData
}) => async paymentId => {
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

  // ! Should I send totalPrice or shouldPayPrice and 1 or totalReservedCount
  updateHostelBookingData(
    newReservation.hostelId,
    newReservation.totalPrice,
    1
  );

  logger.info(
    `new Hostel reservation is completed${JSON.stringify(
      newReservation.TO_JSON(),
      undefined,
      4
    )}`
  );
};
