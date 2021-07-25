/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case here in index and inject it to the method wrapper
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */

const _ = require('lodash');
const moment = require('moment');
const logger = require('../../../startup/logger');
const { ApplicationError } = require('../../../shared/errors');
const {
  REQUEST_RESPONSE,
  EVENTS_TYPES,
  REQUEST_STATUS
} = require('../../../shared/constants/defaults');
const { GetSortObj } = require('../../../shared/constants/methods');
const {
  getSoldierById,
  addSoldierClearance
} = require('../../Soldier/Soldier-external-use-cases');

const makeAddClearance = require('./add-clearance');
const makeAddBulkClearance = require('./add-bulk-clearances');
const makeDeleteClearance = require('./delete-clearance');
const makeGetClearance = require('./get-clearance');
const makeGetClearances = require('./get-clearances');
const makeEditClearance = require('./edit-clearance');

const addClearance = makeAddClearance({
  ApplicationError,
  logger,
  getSoldierById,
  addSoldierClearance
});
const addBulkClearance = makeAddBulkClearance({
  ApplicationError,
  logger,
  getSoldierById,
  addSoldierClearance
});
const deleteClearance = makeDeleteClearance({
  ApplicationError,
  logger
});

const getClearance = makeGetClearance({
  moment,
  ApplicationError,
  logger,
  accepted: REQUEST_RESPONSE.ACCEPTED
});

const getClearances = makeGetClearances({
  _,
  moment,
  ApplicationError,
  logger,
  accepted: REQUEST_RESPONSE.ACCEPTED,
  GetSortObj
});

const editClearance = makeEditClearance({
  ApplicationError,
  logger,
  events: EVENTS_TYPES,
  pending: REQUEST_STATUS.PENDING
});

const clearancesUseCases = {
  addClearance,
  addBulkClearance,
  deleteClearance,
  editClearance,
  getClearance,
  getClearances
};

module.exports = clearancesUseCases;
