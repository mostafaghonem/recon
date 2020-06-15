const logger = require('../../../startup/logger');
// TODO need to remove it from here and find a solution to put it in index.js
const {
  updateOfficeStatus
} = require('../../offices/offices-external-use-cases');
const { ApplicationError } = require('../../../shared/errors');

const makeGetUploadedOfficesRequests = require('./get-uploaded-offices-requests');
const makeUpdateUploadedOfficeRequest = require('./update-uploaded-office-request');

const getuploadedOfficesRequests = makeGetUploadedOfficesRequests({
  ApplicationError,
  logger
});

const updateuploadedOfficesRequests = makeUpdateUploadedOfficeRequest({
  ApplicationError,
  logger,
  updateOfficeStatus
});

const uploadedOfficesRequestsUseCases = {
  getuploadedOfficesRequests,
  updateuploadedOfficesRequests
};

module.exports = uploadedOfficesRequestsUseCases;
