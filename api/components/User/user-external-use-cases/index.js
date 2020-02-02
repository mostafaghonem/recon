/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case
 *
 *
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */
const logger = require('../../../startup/logger');
const { ApplicationError } = require('../../../shared/errors');

const makeUpdateIdentification = require('./update-identification');

const updateIdentification = makeUpdateIdentification({
  ApplicationError,
  logger
});

const UsersExternalService = Object.freeze({
  updateIdentification
});

module.exports = UsersExternalService;
