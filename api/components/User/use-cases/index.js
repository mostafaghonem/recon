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
const smsService = require('../../../shared/services').smsService;

const makeRegisterUserUC = require('./register-user');
const makeLoginUser = require('./login-user');
const makeFacebookAuthService = require('./facebookAuthService');
const makeFacebookLogin = require('./facebookLogin');
const makeSmsVerifications = require('./sms-verifications');

const registerUser = makeRegisterUserUC({
  ApplicationError,
  logger,
  redis: redisClient
});

const verifyPhone = makeSmsVerifications({
  ApplicationError,
  logger,
  redis: redisClient,
  smsService
});

const loginUser = makeLoginUser({
  ApplicationError,
  logger
});

const facebookAuth = makeFacebookAuthService({
  passport,
  FacebookStrategy,
  redis: redisClient
})();

const { faceBookData, facebookLoginService } = makeFacebookLogin({
  redis: redisClient
});

const userUseCases = {
  registerUser,
  loginUser,
  facebookAuth,
  faceBookData,
  facebookLoginService,
  verifyPhone
};

module.exports = userUseCases;
