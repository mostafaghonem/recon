/* eslint-disable no-unused-vars */
//! only require Entity/model
const { HostelReservationEntity } = require('../Entity');

// ! use Entity as much as possible use model for only urgent cases
// const Models = require('../Models');

// should have no implementation for any specific orm
module.exports = ({
  ApplicationError,
  publisher,
  logger,
  checkAndCalculateReservationCost,
  uuid,
  processPayment
}) => async ({
  renterId,
  hostelId,
  fromts,
  tots,
  currency,
  totalPrice,
  totalReservedCount,
  rooms,
  reserveDatets = new Date().getTime(),
  paymentMethod = 'credit'
}) => {
  const publisherClient = publisher.createClient({
    no_ready_check: true,
    host: process.env.REDIS_HOST,
    auth_pass: process.env.REDIS_PASS
  });

  // ! we must use this service to make sure that shouldPayPrice is correct
  const reservationCost = await checkAndCalculateReservationCost({
    hostelId,
    fromts,
    tots,
    rooms
  });

  if (!reservationCost)
    throw new ApplicationError(`This Reservation can't be processed`, 400);

  // if (reservationCost !== totalPrice)
  //   throw new ApplicationError(`This Reservation can't be processed`, 400);
  const paymentId = uuid();

  let extras = (2.75 / 100) * reservationCost + 3;
  extras = Math.round((extras + Number.EPSILON) * 100) / 100;
  const shouldPayPrice = reservationCost;
  const shouldPayPriceAfterExtras = reservationCost + extras;
  const reservationData = {
    renterId,
    hostelId,
    fromTs: fromts,
    toTs: tots,
    current: reservationCost,
    totalReservedCount,
    total: shouldPayPrice,
    totalAfterExtras: shouldPayPriceAfterExtras,
    rooms,
    reserveDateTs: reserveDatets,
    extras,
    currency, // ['le', 'USD']
    method: paymentMethod // ['credit' || 'kiosk']
  };

  // Should receive [iframeSrc]
  const paymentSent = await processPayment({
    paymentId,
    userId: renterId,
    payload: reservationData,
    timeLimit: 5 * 60
  });

  if (!paymentSent)
    throw new ApplicationError(`This Reservation can't be processed`, 500);

  return {
    paymentId,
    shouldPay: reservationData.total,
    ...paymentSent
  };

  // return 'payment request is sent';

  // !After payment processed successfully should call the following code in another external use-case passing paymentId

  // let reservationCachedData = await redis.getAsync(`${paymentId}-paymentId`);

  // reservationCachedData = JSON.parse(reservationCachedData);

  // // logger.info(reservationCachedData);
  // const newReservation = new HostelReservationEntity({
  //   fromts: reservationCachedData.fromts,
  //   hostelId: reservationCachedData.hostelId,
  //   renterId: reservationCachedData.renterId,
  //   reserveDatets: reservationCachedData.reserveDatets,
  //   rooms: reservationCachedData.rooms,
  //   shouldPayPrice: reservationCachedData.shouldPayPrice,
  //   totalPrice: reservationCachedData.totalPrice,
  //   totalReservedCount: reservationCachedData.totalReservedCount,
  //   tots: reservationCachedData.tots
  // });

  // await newReservation.save();

  // publisherClient.publish(
  //   'hostel-reservation-complete-payment',
  //   JSON.stringify({
  //     hostelId: newReservation.hostelId,
  //     totalOnlineBooking: 1,
  //     totalRevenue: newReservation.shouldPayPrice
  //   })
  // );

  // publisherClient.quit();

  // // ! call Farid method after saving the reservation

  // logger.info(
  //   `new Hostel reservation is waiting for payment to be completed${JSON.stringify(
  //     newReservation.TO_JSON(),
  //     undefined,
  //     4
  //   )}`
  // );
  // return { paymentId, shouldPay: reservationData.shouldPayPrice };
};
