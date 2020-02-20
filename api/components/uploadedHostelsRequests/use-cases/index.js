const logger = require('../../../startup/logger');
// TODO need to remove it from here and find a solution to put it in index.js
const {
  updateHostelStatus
} = require('../../hostels/hostels-external-use-cases');
const { ApplicationError } = require('../../../shared/errors');

const makeGetUploadedHostelsRequests = require('./get-uploaded-hostels-requests');
const makeUpdateUploadedHostelRequest = require('./update-uploaded-hostel-request');

const getuploadedHostelsRequests = makeGetUploadedHostelsRequests({
  ApplicationError,
  logger
});

const updateuploadedHostelsRequests = makeUpdateUploadedHostelRequest({
  ApplicationError,
  logger,
  updateHostelStatus
});

const uploadedHostelsRequestsUseCases = {
  getuploadedHostelsRequests,
  updateuploadedHostelsRequests
};

module.exports = uploadedHostelsRequestsUseCases;
