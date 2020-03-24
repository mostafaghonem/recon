/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case
 *
 *
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */
const Promise = require('bluebird');
const _ = require('lodash');
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;
const logger = require('../../../startup/logger');
const { ApplicationError } = require('../../../shared/errors');
const { REQUEST_RESPONSE } = require('../../../shared/constants/defaults');
const { getUsersByIds } = require('../../User/user-external-use-cases');
const makeGetUnitsDataFromIds = require('./get-units-data-from-Ids');
const makeUpdateUnitTotalRevenue = require('./update-units-totalRevenue');
const makeCalculateReservationCost = require('./calculate-reservation-cost');
const makeGetUnitWithOwner = require('./get-unit-with-owner');
const makeGetUnit = require('./get-unit');
const makeUpdateUnitStatus = require('./update-unit-status');

const updateUnitTotalRevenue = makeUpdateUnitTotalRevenue({
  ApplicationError,
  logger
});

const calculateReservationCost = makeCalculateReservationCost({
  ApplicationError,
  logger,
  _
});

const getunitsDataFromIds = makeGetUnitsDataFromIds({
  ApplicationError,
  logger,
  _,
  ObjectId,
  Promise
});

const getUnit = makeGetUnit({
  ApplicationError,
  accepted: REQUEST_RESPONSE.ACCEPTED
});

const getUnitWithOwner = makeGetUnitWithOwner({
  ApplicationError,
  getUsersByIds,
  accepted: REQUEST_RESPONSE.ACCEPTED
});

const updateUnitStatus = makeUpdateUnitStatus({
  ApplicationError,
  logger
});
const unitsExternalService = Object.freeze({
  updateUnitTotalRevenue,
  getunitsDataFromIds,
  calculateReservationCost,
  getUnit,
  getUnitWithOwner,
  updateUnitStatus
});

module.exports = unitsExternalService;
