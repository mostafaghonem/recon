/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case
 *
 *
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */
const _ = require('lodash');
const mongoose = require('mongoose');
const logger = require('../../../startup/logger');
const { ApplicationError } = require('../../../shared/errors');
const makeGetUserHostelsCount = require('./get-user-hostels-count');
const makeGetUserHostels = require('./get-user-hostels');
const makeUpdateHostelStatus = require('./update-hostel-status');
const makeUpdateHostelData = require('./update-hostel-data');
const makeGetHouseOwnerHostel = require('./get-houseOwner-hostel');
const makeCalculateReservationCost = require('./calculate-reservation-cost');
const makeGetHostelsDataFromIds = require('./get-hostels-data-from-Ids');
const makeUpdateHostelTotalRevenue = require('./update-hostels-totalRevenue');

const { ObjectId } = mongoose.Types;

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

const updateHostelData = makeUpdateHostelData({
  ApplicationError,
  logger
});

const updateHostelTotalRevenue = makeUpdateHostelTotalRevenue({
  ApplicationError,
  logger
});

const calculateReservationCost = makeCalculateReservationCost({
  ApplicationError,
  logger,
  _,
  getReservedRoomCountByHotels
});

const getHouseOwnerHostel = makeGetHouseOwnerHostel({
  ApplicationError,
  logger
});

const getHostelsDataFromIds = makeGetHostelsDataFromIds({
  ApplicationError,
  logger,
  _,
  ObjectId
});

const HostelsExternalService = Object.freeze({
  getUserHostels,
  updateHostelStatus,
  updateHostelData,
  getUserHostelsCount,
  updateHostelTotalRevenue,
  getHouseOwnerHostel,
  getHostelsDataFromIds,
  calculateReservationCost
});

module.exports = HostelsExternalService;
