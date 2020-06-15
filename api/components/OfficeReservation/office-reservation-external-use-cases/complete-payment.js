// const model = require('../Models');
const { OfficeReservationEntity } = require('../Entity');

// eslint-disable-next-line no-unused-vars
module.exports = ({ logger, publisher }) => async ({ payload }) => {
  const publisherClient = publisher.createClient({
    no_ready_check: true,
    host: process.env.REDIS_HOST,
    auth_pass: process.env.REDIS_PASS
  });

  const reservationCachedData = payload.reservation;

  // logger.info(reservationCachedData);
  const newReservation = new OfficeReservationEntity({
    fromts: reservationCachedData.fromTs,
    officeId: reservationCachedData.officeId,
    renterId: reservationCachedData.renterId,
    reserveDatets: reservationCachedData.reserveDateTs,
    offices: reservationCachedData.offices,
    shouldPayPrice: reservationCachedData.totalAfterExtras,
    totalPrice: reservationCachedData.total,
    totalReservedCount: reservationCachedData.totalReservedCount,
    tots: reservationCachedData.toTs
  });

  await newReservation.save();

  publisherClient.publish(
    'office-reservation-complete-payment',
    JSON.stringify({
      officeId: newReservation.officeId,
      totalOnlineBooking: newReservation.totalReservedCount,
      totalRevenue: newReservation.total
    })
  );

  publisherClient.quit();

  logger.info(
    `new Office reservation is completed${JSON.stringify(
      newReservation.TO_JSON(),
      undefined,
      4
    )}`
  );
};
