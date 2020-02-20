/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case
 *
 *
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */
const logger = require('../../../startup/logger');
const { ApplicationError } = require('../../../shared/errors');

const makeGetReservedRoomCountByHotel = require('./get-reserved-room-count-by-hotel');
const makeIsGroupBusyInDateTs = require('./is-group-busy-in-this-date');

const getReservedRoomCountByHotels = makeGetReservedRoomCountByHotel({
  ApplicationError,
  logger
});

/**
 * Returns an array with each groupId if he has any reservation in this date with its count of the reservations
 */
const isGroupBusyInDateTs = makeIsGroupBusyInDateTs({
  ApplicationError,
  logger
});

const completePayment = () => {
  // after finish call update-hostel-bookingData.js
};

// const isGroupBusyInDateTs = (hostelIds, groupIds, datets) => {
//   return 'Is this group is busy within this date? if yes, how many rooms is busy';
// };

const HostelReservationExternals = Object.freeze({
  getReservedRoomCountByHotels,
  isGroupBusyInDateTs
});

module.exports = HostelReservationExternals;
