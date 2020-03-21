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
const logger = require('../../../startup/logger');
const { ApplicationError } = require('../../../shared/errors');
const makeGetUnitsDataFromIds = require('./get-units-data-from-Ids');
const makeUpdateUnitTotalRevenue = require('./update-units-totalRevenue');
const makeCalculateReservationCost = require('./calculate-reservation-cost');

const { ObjectId } = mongoose.Types;

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

const unitsExternalService = Object.freeze({
  updateUnitTotalRevenue,
  getunitsDataFromIds,
  calculateReservationCost
});

module.exports = unitsExternalService;
