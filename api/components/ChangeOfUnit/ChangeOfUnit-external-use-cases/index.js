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

const makeEditChangeOfUnit = require('./edit-uploaded-unit-request');
const makeGetMyChangeOfUnit = require('./get-my-uploaded-unit-requests');
const { setChangesProcessedStatus } = require('../use-cases');

const editChangeOfUnit = makeEditChangeOfUnit({
  ApplicationError,
  logger,
  requestTypes
});

const getMyChangeOfUnit = makeGetMyChangeOfUnit({
  ApplicationError,
  logger
});

const ChangeOfUnitExternalService = Object.freeze({
  editChangeOfUnit,
  setChangesProcessedStatus,
  getMyChangeOfUnit
});

module.exports = ChangeOfUnitExternalService;
