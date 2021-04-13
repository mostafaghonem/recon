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
const { GetSortObj } = require('../../../shared/constants/methods');
const { getSoldiersByUnitId } = require('../../Soldier/Soldier-external-use-cases');
const makeAddDivision = require('./add-division');
const makeDeleteDivision = require('./delete-division');
const makeGetDivision = require('./get-division');
const makeGetDivisions = require('./get-divisions');
const makeHideDivision = require('./hide-division');
const makeUnhideDivision = require('./unhide-division');
const makeEditDivision = require('./edit-division');

const addDivision = makeAddDivision({
  ApplicationError,
  logger,
  events: EVENTS_TYPES
});

const deleteDivision = makeDeleteDivision({
  getSoldiersByUnitId,
  ApplicationError,
  logger
});

const getDivision = makeGetDivision({
  moment,
  ApplicationError,
  logger,
  accepted: REQUEST_RESPONSE.ACCEPTED
});

const getDivisions = makeGetDivisions({
  moment,
  ApplicationError,
  logger,
  accepted: REQUEST_RESPONSE.ACCEPTED,
  GetSortObj
});

const hideDivision = makeHideDivision({
  ApplicationError,
  logger
});

const unhideDivision = makeUnhideDivision({
  ApplicationError,
  logger
});

const editDivision = makeEditDivision({
  ApplicationError,
  logger,
  events: EVENTS_TYPES,
  pending: REQUEST_STATUS.PENDING
});

const divisionsUseCases = {
  addDivision,
  deleteDivision,
  hideDivision,
  unhideDivision,
  editDivision,
  getDivision,
  getDivisions
};

module.exports = divisionsUseCases;
