/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case here in index and inject it to the method wrapper
 *
 *
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */

const redisClient = require('../../../shared/redis-client');
const logger = require('../../../startup/logger');
const { ApplicationError } = require('../../../shared/errors');

const makeRegisterUserUC = require('./register-user');
const makeLoginUser = require('./login-user');

const registerUser = makeRegisterUserUC({
  ApplicationError,
  logger,
  redis: redisClient
});

const loginUser = makeLoginUser({
  ApplicationError,
  logger
});

const userUseCases = Object.freeze({
  registerUser,
  loginUser
});

module.exports = userUseCases;
