/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case
 *
 *
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */
const logger = require('../../../startup/logger');
// TODO need to remove it from here and find a solution to put it in index.js
const { ApplicationError } = require('../../../shared/errors');
const { REQUEST_TYPES } = require('../../../shared/constants/defaults');

const requestTypes = Object.freeze(REQUEST_TYPES);
const makeAddUploadedUnitsRequests = require('./add-uploaded-unit-request');
const makeEditUploadedUnitsRequests = require('./edit-uploaded-unit-request');
const makeGetMyUploadedUnitsRequests = require('./get-my-uploaded-unit-requests');

const addUploadedUnitsRequests = makeAddUploadedUnitsRequests({
  ApplicationError,
  logger
});

const editUploadedUnitsRequests = makeEditUploadedUnitsRequests({
  ApplicationError,
  logger,
  requestTypes
});

const getMyUploadedUnitsRequests = makeGetMyUploadedUnitsRequests({
  ApplicationError,
  logger
});

const UploadedUnitsRequestsExternalService = Object.freeze({
  addUploadedUnitsRequests,
  editUploadedUnitsRequests,
  getMyUploadedUnitsRequests
});

module.exports = UploadedUnitsRequestsExternalService;
