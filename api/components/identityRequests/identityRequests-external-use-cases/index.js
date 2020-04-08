/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case
 *
 *
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */
const logger = require('../../../startup/logger');
//TODO need to remove it from here and find a solution to put it in index.js
const { ApplicationError } = require('../../../shared/errors');

const makeAddIdentityRequests = require('./add-identity-requests');
const makeGetUserIdentityStatus = require('./get-user-identity-status');

const addIdentityRequests = makeAddIdentityRequests({
  ApplicationError,
  logger
});

const getUserIdentityStatus = makeGetUserIdentityStatus({
  ApplicationError,
  logger
});

const IdentityRequestsExternalService = Object.freeze({
  addIdentityRequests,
  getUserIdentityStatus
});

module.exports = IdentityRequestsExternalService;
