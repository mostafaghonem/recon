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
const makeGetUserOfficesCount = require('./get-user-offices-count');
const makeGetUserOffices = require('./get-user-offices');
const makeUpdateOfficeStatus = require('./update-office-status');
const makeUpdateOfficeData = require('./update-office-data');
const makeGetHouseOwnerOffice = require('./get-houseOwner-office');
const makeCalculateReservationCost = require('./calculate-reservation-cost');
const makeGetOfficesDataFromIds = require('./get-offices-data-from-Ids');
const makeUpdateOfficeTotalRevenue = require('./update-offices-totalRevenue');

const { ObjectId } = mongoose.Types;

const {
  getReservedOfficeCountByOffices
} = require('../../OfficeReservation/office-reservation-external-use-cases');

const getUserOffices = makeGetUserOffices({
  ApplicationError,
  logger,
  getReservedOfficeCountByOffices
});

const getUserOfficesCount = makeGetUserOfficesCount({
  ApplicationError,
  logger
});

const updateOfficeStatus = makeUpdateOfficeStatus({
  ApplicationError,
  logger
});

const updateOfficeData = makeUpdateOfficeData({
  ApplicationError,
  logger
});

const updateOfficeTotalRevenue = makeUpdateOfficeTotalRevenue({
  ApplicationError,
  logger
});

const calculateReservationCost = makeCalculateReservationCost({
  ApplicationError,
  logger,
  _,
  getReservedOfficeCountByOffices
});

const getHouseOwnerOffice = makeGetHouseOwnerOffice({
  ApplicationError,
  logger
});

const getOfficesDataFromIds = makeGetOfficesDataFromIds({
  ApplicationError,
  logger,
  _,
  ObjectId
});

const OfficesExternalService = Object.freeze({
  getUserOffices,
  updateOfficeStatus,
  updateOfficeData,
  getUserOfficesCount,
  updateOfficeTotalRevenue,
  getHouseOwnerOffice,
  getOfficesDataFromIds,
  calculateReservationCost
});

module.exports = OfficesExternalService;
