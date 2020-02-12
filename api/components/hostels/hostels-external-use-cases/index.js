/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case
 *
 *
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */
const logger = require('../../../startup/logger');
const { ApplicationError } = require('../../../shared/errors');

const makeGetUserHostels = require('./get-user-hostels');
const makeUpdateHostelStatus = require('./update-hostel-status');

const getUserHostels = makeGetUserHostels({
  ApplicationError,
  logger
});

const updateHostelStatus = makeUpdateHostelStatus({
  ApplicationError,
  logger
});

const HostelsExternalService = Object.freeze({
  getUserHostels,
  updateHostelStatus
});

module.exports = HostelsExternalService;
