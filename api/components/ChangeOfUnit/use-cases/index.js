const moment = require('moment');
const logger = require('../../../startup/logger');
const {
  GetSortObj,
  GetSearchObj
} = require('../../../shared/constants/methods');
const { REQUEST_STATUS } = require('../../../shared/constants/defaults');
// TODO need to remove it from here and find a solution to put it in index.js
// const { updateUnitEditStatus } = require('../../Unit/UnitExternalUseCases');
const { ApplicationError, ErrorText } = require('../../../shared/errors');
const makeAddChangeOfUnit = require('./add-change-of-unit');
const makeGetChangesOfUnit = require('./get-changes-of-units');
const makeUpdateUploadedUnitChange = require('./update-uploaded-unit-request');
const makeSetChangesProcessedStatus = require('./set-requests-processed-status');
const makeAddBulkChangeOfUnit = require('./add-bulk-change-of-unit');

const {
  getSoldierById,
  getSoldiersByIds,
  changeSoldierUnit
} = require('../../Soldier/Soldier-external-use-cases');
const {
  getStaffsByIds,
  changeStaffUnit
} = require('../../Staff/Staff-external-use-cases');
const {
  getDivisionById
} = require('../../Division/Division-external-use-cases');

const addChangeOfUnit = makeAddChangeOfUnit({
  ApplicationError,
  ErrorText,
  logger,
  getSoldierById,
  getSoldiersByIds,
  getStaffsByIds,
  getDivisionById,
  changeSoldierUnit,
  changeStaffUnit
});

const setChangesProcessedStatus = makeSetChangesProcessedStatus();

const getChangesOfUnit = makeGetChangesOfUnit({
  moment,
  GetSortObj,
  GetSearchObj,
  ApplicationError,
  logger
});

const updateChangeOfUnit = makeUpdateUploadedUnitChange({
  moment,
  ApplicationError,
  logger,

  setChangesProcessedStatus,
  accepted: REQUEST_STATUS.ACCEPTED
});

const addBulkChangeOfUnit = makeAddBulkChangeOfUnit({
  ApplicationError,
  ErrorText,
  logger,
  getSoldiersByIds,
  getStaffsByIds,
  getDivisionById,
  addChangeOfUnit
});

const ChangeOfUnitUseCases = {
  addChangeOfUnit,
  getChangesOfUnit,
  updateChangeOfUnit,
  setChangesProcessedStatus,
  addBulkChangeOfUnit
};

module.exports = ChangeOfUnitUseCases;
