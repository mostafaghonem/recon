/* eslint-disable no-unused-vars */
//! only require Entity/model
const { HostelReservationEntity } = require('../Entity');

// ! use Entity as much as possible use model for only urgent cases
// const Models = require('../Models');

// should have no implementation for any specific orm
module.exports = ({
  redis,
  ApplicationError,
  logger,
  checkAndCalculateReservationCost,
  uuid,
  processPayment
}) => async ({
  renterId,
  hostelId,
  fromts,
  tots,
  totalPrice,
  shouldPayPrice,
  totalReservedCount,
  rooms,
  reserveDatets = new Date().getTime()
}) => {
  // ! we must use this service to make sure that shouldPayPrice is correct
  const reservationCost = await checkAndCalculateReservationCost({
    renterId,
    hostelId,
    fromts,
    tots,
    totalReservedCount,
    rooms
  });

  if (!reservationCost)
    throw new ApplicationError(`This Reservation can't be processed`, 400);

  const paymentId = uuid();

  const reservationData = {
    renterId,
    hostelId,
    fromts,
    tots,
    totalPrice,
    shouldPayPrice: reservationCost,
    totalReservedCount,
    rooms,
    reserveDatets
  };

  await redis.setexAsync(
    `${paymentId}-paymentId`,
    20 * 60,
    JSON.stringify(reservationData)
  );

  const paymentSent = await processPayment({
    paymentId,
    payload: reservationData,
    timeLimit: 5 * 60,
    shouldPay: reservationCost
  });

  if (!paymentSent)
    throw new ApplicationError(`This Reservation can't be processed`, 500);

  // !After payment processed successfully should call the following code in another external use-case passing paymentId

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

  // ! call Farid method after saving the reservation

  logger.info(
    `new Hostel reservation is waiting for payment to be completed${JSON.stringify(
      newReservation.TO_JSON(),
      undefined,
      4
    )}`
  );
};
