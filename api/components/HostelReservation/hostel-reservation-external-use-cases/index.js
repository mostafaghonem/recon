/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case
 *
 *
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */
const logger = require('../../../startup/logger');
const { ApplicationError } = require('../../../shared/errors');

const makeGetReservedRoomsByHotel = require('./get-reserved-rooms-by-hotel');
const makeGetReservedRoomCountByHotel = require('./get-reserved-rooms-by-hotel');

const getReservedRoomsByHotel = makeGetReservedRoomsByHotel({
  ApplicationError,
  logger
});

const getReservedRoomCountByHotel = makeGetReservedRoomCountByHotel({
  ApplicationError,
  logger
});

const HostelReservationExternals = Object.freeze({
  getReservedRoomsByHotel,
  getReservedRoomCountByHotel
});

module.exports = HostelReservationExternals;
