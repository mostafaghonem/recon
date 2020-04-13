const logger = require('../../../startup/logger');
// TODO need to remove it from here and find a solution to put it in index.js
const {
  updateHostelStatus
} = require('../../hostels/hostels-external-use-cases');
const { ApplicationError } = require('../../../shared/errors');

const makeGetEditHostelsRequests = require('./get-edit-hostels-requests');
const makeUpdateEditHostelRequest = require('./update-edit-hostel-request');

const getEditHostelsRequests = makeGetEditHostelsRequests({
  ApplicationError,
  logger
});

const updateEditHostelsRequests = makeUpdateEditHostelRequest({
  ApplicationError,
  logger,
  updateHostelStatus
});

const editHostelsRequestsUseCases = {
  getEditHostelsRequests,
  updateEditHostelsRequests
};

module.exports = editHostelsRequestsUseCases;
