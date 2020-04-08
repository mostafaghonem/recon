const moment = require('moment');
const logger = require('../../../startup/logger');
const {
  GetSortObj,
  GetSearchObj
} = require('../../../shared/constants/methods');
const { REQUEST_STATUS } = require('../../../shared/constants/defaults');
// TODO need to remove it from here and find a solution to put it in index.js
const { updateUnitStatus } = require('../../Unit/UnitExternalUseCases');
const { ApplicationError } = require('../../../shared/errors');
const makeGetUploadedUnitsRequests = require('./get-uploaded-units-requests');
const makeUpdateUploadedUnitRequest = require('./update-uploaded-unit-request');

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
  updateUnitStatus,
  accepted: REQUEST_STATUS.ACCEPTED
});

const UploadedUnitsRequestsUseCases = {
  getUploadedUnitsRequests,
  updateUploadedUnitsRequests
};

module.exports = UploadedUnitsRequestsUseCases;
