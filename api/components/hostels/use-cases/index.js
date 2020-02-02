/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case here in index and inject it to the method wrapper
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */

const logger = require('../../../startup/logger');
const { ApplicationError } = require('../../../shared/errors');
const { PERMISSIONS } = require('../../../shared/constants/defaults');
// const emailService = require('../../../shared/services').emailService;

const makeLoginUser = require('./login-user');

const makeUpdateUserProfile = require('./update-profile');

const updateUserProfile = makeUpdateUserProfile({
  ApplicationError,
  logger,
  addIdentityRequests
});

const loginUser = makeLoginUser({
  ApplicationError,
  logger
});

const hostelsUseCases = {
  loginUser,
  updateUserProfile
};

module.exports = hostelsUseCases;
