const logger = require('../../../startup/logger');
// TODO need to remove it from here and find a solution to put it in index.js
const { updateUnitStatus } = require('../../Unit/UnitExternalUseCases');
const { ApplicationError } = require('../../../shared/errors');

const makeGetUploadedUnitsRequests = require('./get-uploaded-units-requests');
const makeUpdateUploadedUnitRequest = require('./update-uploaded-unit-request');

const getUploadedUnitsRequests = makeGetUploadedUnitsRequests({
  ApplicationError,
  logger
});

const updateUploadedUnitsRequests = makeUpdateUploadedUnitRequest({
  ApplicationError,
  logger,
  updateUnitStatus
});

const UploadedUnitsRequestsUseCases = {
  getUploadedUnitsRequests,
  updateUploadedUnitsRequests
};

module.exports = UploadedUnitsRequestsUseCases;
