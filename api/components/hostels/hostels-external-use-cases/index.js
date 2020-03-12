/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case
 *
 *
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */
const logger = require('../../../startup/logger');
const { ApplicationError } = require('../../../shared/errors');
const makeGetUserHostelsCount = require('./get-user-hostels-count');
const makeGetUserHostels = require('./get-user-hostels');
const makeUpdateHostelStatus = require('./update-hostel-status');
const makeGetHouseOwnerHostel = require('./get-houseOwner-hostel');
const makeCalculateReservationCost = require('./calculate-reservation-cost');
const {
  getReservedRoomCountByHotels
} = require('../../HostelReservation/hostel-reservation-external-use-cases');

const getUserHostels = makeGetUserHostels({
  ApplicationError,
  logger,
  getReservedRoomCountByHotels
});

const getUserHostelsCount = makeGetUserHostelsCount({
  ApplicationError,
  logger
});

const updateHostelStatus = makeUpdateHostelStatus({
  ApplicationError,
  logger
});

const calculateReservationCost = makeCalculateReservationCost({
  ApplicationError,
  logger,
  getReservedRoomCountByHotels
});

const getHouseOwnerHostel = makeGetHouseOwnerHostel({
  ApplicationError,
  logger
});

const HostelsExternalService = Object.freeze({
  getUserHostels,
  updateHostelStatus,
  getUserHostelsCount,
  getHouseOwnerHostel,
  calculateReservationCost
});

module.exports = HostelsExternalService;
