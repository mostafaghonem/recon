/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case here in index and inject it to the method wrapper
 *
 *
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

const redisClient = require('../../../shared/redis-client');
const logger = require('../../../startup/logger');
const { ApplicationError } = require('../../../shared/errors');

const makeRegisterUserUC = require('./register-user');
const makeLoginUser = require('./login-user');
const facebookAuthService = require('./facebookAuthService');

const registerUser = makeRegisterUserUC({
  ApplicationError,
  logger,
  redis: redisClient
});

const loginUser = makeLoginUser({
  ApplicationError,
  logger
});

const facebookAuth = facebookAuthService({
  passport,
  FacebookStrategy
});
const userUseCases = Object.freeze({
  registerUser,
  loginUser,
  facebookAuth
});

module.exports = userUseCases;
