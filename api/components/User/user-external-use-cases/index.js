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
const makeGetUsersByIds = require('./get-users-data-with-ids');
const makeGetUsersByPhone = require('./get-users-data-with-phone');
const makeGetUsersByPermissions = require('./get-users-with-permissions');
const makeGetUnitsFavorability = require('./get-units-favorability');
const makeGetHostelsFavorability = require('./get-hostels-favorability');

const updateIdentification = makeUpdateIdentification({
  ApplicationError,
  logger
});

const getUsersByIds = makeGetUsersByIds({
  logger,
  ApplicationError
});

const getUsersByPhone = makeGetUsersByPhone({
  logger,
  ApplicationError
});

const getUsersByPermissions = makeGetUsersByPermissions({
  logger,
  ApplicationError
});

const getUnitsFavorability = makeGetUnitsFavorability({
  logger,
  ApplicationError
});

const getHostelsFavorability = makeGetUnitsFavorability({
  logger,
  ApplicationError
});

const UsersExternalService = Object.freeze({
  getUsersByPhone,
  getUsersByIds,
  getUsersByPermissions,
  updateIdentification,
  getUnitsFavorability,
  getHostelsFavorability
});

module.exports = UsersExternalService;
