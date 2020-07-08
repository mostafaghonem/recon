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
const makeGetUsersByusername = require('./get-users-data-with-username');
const makeGetUsersByPermissions = require('./get-users-with-permissions');
const makeGetUnitsFavorability = require('./get-units-favorability');
const makeGetHostelsFavorability = require('./get-hostels-favorability');
const makeGetOfficesFavorability = require('./get-offices-favorability');

const updateIdentification = makeUpdateIdentification({
  ApplicationError,
  logger
});

const getUsersByIds = makeGetUsersByIds({
  logger,
  ApplicationError
});

const getUsersByusername = makeGetUsersByusername({
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

const getHostelsFavorability = makeGetHostelsFavorability({
  logger,
  ApplicationError
});

const getOfficesFavorability = makeGetOfficesFavorability({
  logger,
  ApplicationError
});

const UsersExternalService = Object.freeze({
  getUsersByusername,
  getUsersByIds,
  getUsersByPermissions,
  updateIdentification,
  getUnitsFavorability,
  getHostelsFavorability,
  getOfficesFavorability
});

module.exports = UsersExternalService;
