const logger = require('../../../startup/logger');
//TODO need to remove it from here and find a solution to put it in index.js
const { updateIdentification } = require('../../User/user-external-use-cases');
const { ApplicationError } = require('../../../shared/errors');

const makeAddIdentityRequests = require('./add-identity-requests');
const makeGetIdentityRequests = require('./get-identity-requests');
const makeUpdateIdentityRequests = require('./update-identity-requests');
const { REQUEST_RESPONSE } = require('../../../shared/constants/defaults');

const addIdentityRequests = makeAddIdentityRequests({
  ApplicationError,
  logger
});

const getIdentityRequests = makeGetIdentityRequests({
  ApplicationError,
  logger
});

const updateIdentityRequests = makeUpdateIdentityRequests({
  ApplicationError,
  logger,
  updateIdentification,
  REQUEST_RESPONSE
});

const identityRequestsUseCases = {
  addIdentityRequests,
  getIdentityRequests,
  updateIdentityRequests
};

module.exports = identityRequestsUseCases;
