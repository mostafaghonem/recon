const moment = require('moment');
const logger = require('../../../startup/logger');
const {
  GetSortObj,
  GetSearchObj
} = require('../../../shared/constants/methods');
const { REQUEST_STATUS } = require('../../../shared/constants/defaults');
// TODO need to remove it from here and find a solution to put it in index.js
const { updateUnitEditStatus } = require('../../Unit/UnitExternalUseCases');
const { ApplicationError } = require('../../../shared/errors');
const makeGetUploadedUnitsRequests = require('./get-uploaded-units-requests');
const makeUpdateUploadedUnitRequest = require('./update-uploaded-unit-request');
const makeSetRequestsProcessedStatus = require('./set-requests-processed-status');

const setRequestsProcessedStatus = makeSetRequestsProcessedStatus();

const getUploadedUnitsRequests = makeGetUploadedUnitsRequests({
  moment,
  GetSortObj,
  GetSearchObj,
  ApplicationError,
  logger
});

const updateUploadedUnitsRequests = makeUpdateUploadedUnitRequest({
  moment,
  ApplicationError,
  logger,
  updateUnitEditStatus,
  setRequestsProcessedStatus,
  accepted: REQUEST_STATUS.ACCEPTED
});

const UploadedUnitsRequestsUseCases = {
  getUploadedUnitsRequests,
  updateUploadedUnitsRequests,
  setRequestsProcessedStatus
};

module.exports = UploadedUnitsRequestsUseCases;
