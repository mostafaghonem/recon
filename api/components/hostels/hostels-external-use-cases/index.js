/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case
 *
 *
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */
const logger = require('../../../startup/logger');
const { ApplicationError } = require('../../../shared/errors');
const { REQUEST_RESPONSE } = require('../../../shared/constants/defaults');

const makeGetUserHostels = require('./get-user-hostels');
const makeUpdateHostelStatus = require('./update-hostel-status');
const makeGetHouseOwnerHostel = require('./get-houseOwner-hostel');
const makeUpdateHostelBookingData = require('./update-hostel-bookingData');

const getUserHostels = makeGetUserHostels({
  ApplicationError,
  logger
});

const updateHostelStatus = makeUpdateHostelStatus({
  ApplicationError,
  logger
});

const getHouseOwnerHostel = makeGetHouseOwnerHostel({
  ApplicationError,
  logger
});

const updateHostelBookingData = makeUpdateHostelBookingData({
  ApplicationError,
  logger,
  accepted: REQUEST_RESPONSE.ACCEPTED
});

const HostelsExternalService = Object.freeze({
  getUserHostels,
  updateHostelStatus,
  getHouseOwnerHostel,
  updateHostelBookingData
});

module.exports = HostelsExternalService;
