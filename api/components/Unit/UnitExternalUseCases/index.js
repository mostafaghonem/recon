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
const {
  REQUEST_RESPONSE,
  EVENTS_TYPES,
  OBJECTS_TYPES,
  PERMISSIONS
} = require('../../../shared/constants/defaults');
const { EVENTS_TYPES_MESSAGES } = require('../../../shared/constants/texts');
const { getUsersByIds } = require('../../User/user-external-use-cases');
const makeGetUnitsDataFromIds = require('./get-units-data-from-Ids');
const makeUpdateUnitTotalRevenue = require('./update-units-totalRevenue');
const makeCalculateReservationCost = require('./calculate-reservation-cost');
const makeGetUnitWithOwner = require('./get-unit-with-owner');
const makeGetUnit = require('./get-unit');
const makeUpdateUnitStatus = require('./update-unit-status');
const makeCreateUnitEvent = require('./create-unit-event');

const eventsTypes = Object.freeze(EVENTS_TYPES);
const objectsTypes = Object.freeze(OBJECTS_TYPES);
const messages = Object.freeze(EVENTS_TYPES_MESSAGES);
const permissions = Object.freeze(PERMISSIONS);

const {
  createEvent,
  updateEvent
} = require('../../EventManager/ExternalUseCases');

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

const createUnitEvent = makeCreateUnitEvent({
  ApplicationError,
  logger,
  getUsersByIds,
  createEvent,
  updateEvent,
  eventsTypes,
  objectsTypes,
  messages,
  permissions
});

const unitsExternalService = Object.freeze({
  updateUnitTotalRevenue,
  getunitsDataFromIds,
  calculateReservationCost,
  getUnit,
  getUnitWithOwner,
  updateUnitStatus,
  createUnitEvent
});

module.exports = unitsExternalService;
