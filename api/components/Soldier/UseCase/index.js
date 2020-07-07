/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case here in index and inject it to the method wrapper
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */

const moment = require('moment');
const logger = require('../../../startup/logger');
const { ApplicationError } = require('../../../shared/errors');
const {
  REQUEST_RESPONSE,
  EVENTS_TYPES,
  REQUEST_STATUS
} = require('../../../shared/constants/defaults');

const makeAddUnit = require('./add-unit');
const makeDeleteUnit = require('./delete-unit');
const makeGetUnit = require('./get-unit');
const makeGetUnits = require('./get-units');
const makeHideUnit = require('./hide-unit');
const makeUnhideUnit = require('./unhide-unit');
const makeEditUnit = require('./edit-unit');

const { getUnitsFavorability } = require('../../User/user-external-use-cases');
const { createUnitEvent } = require('../UnitExternalUseCases');

const addUnit = makeAddUnit({
  ApplicationError,
  logger,
  createUnitEvent,
  events: EVENTS_TYPES
});

const deleteUnit = makeDeleteUnit({
  ApplicationError,
  logger
});

const getUnit = makeGetUnit({
  moment,
  ApplicationError,
  logger,
  accepted: REQUEST_RESPONSE.ACCEPTED,
  getUnitsFavorability,
  GetUnitsAvailbility
});

const getUnits = makeGetUnits({
  moment,
  ApplicationError,
  logger,
  accepted: REQUEST_RESPONSE.ACCEPTED,
  GetSortObj,
  getUnitsFavorability,
  GetUnitsAvailbility
});

const hideUnit = makeHideUnit({
  ApplicationError,
  logger
});

const unhideUnit = makeUnhideUnit({
  ApplicationError,
  logger
});

const editUnit = makeEditUnit({
  ApplicationError,
  logger,
  createUnitEvent,
  setRequestsProcessedStatus,
  events: EVENTS_TYPES,
  pending: REQUEST_STATUS.PENDING
});

const unitsUseCases = {
  addUnit,
  deleteUnit,
  hideUnit,
  unhideUnit,
  editUnit,
  getUnit,
  getUnits
};

module.exports = unitsUseCases;
