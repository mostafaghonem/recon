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

const getReservedRoomCountByHotels = makeGetReservedRoomCountByHotel({
  ApplicationError,
  logger
});

const HostelReservationExternals = Object.freeze({
  getReservedRoomCountByHotels
});

module.exports = HostelReservationExternals;
