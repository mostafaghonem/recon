const logger = require('../../../startup/logger');
// TODO need to remove it from here and find a solution to put it in index.js
const {
  updateOfficeData
} = require('../../offices/offices-external-use-cases');
const { ApplicationError } = require('../../../shared/errors');

const makeGetEditOfficesRequests = require('./get-edit-offices-requests');
const makeUpdateEditOfficeRequest = require('./update-edit-office-request');

const getEditOfficesRequests = makeGetEditOfficesRequests({
  ApplicationError,
  logger
});

const updateEditOfficesRequests = makeUpdateEditOfficeRequest({
  ApplicationError,
  logger,
  updateOfficeData
});

const editOfficesRequestsUseCases = {
  getEditOfficesRequests,
  updateEditOfficesRequests
};

module.exports = editOfficesRequestsUseCases;
