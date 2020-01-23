/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case here in index and inject it to the method wrapper
 * --> |
 * --> |
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth').Strategy;

const redisClient = require('../../../shared/redis-client');
const logger = require('../../../startup/logger');
const { ApplicationError } = require('../../../shared/errors');
const smsService = require('../../../shared/services').smsService;
const emailService = require('../../../shared/services').emailService;

const makeRegisterUserUC = require('./register-user');
const makeLoginUser = require('./login-user');
const makeFacebookAuthService = require('./googleAuthService');
const makeGoogleAuthService = require('./facebookAuthService');

const makeFacebookLogin = require('./facebookLogin');
const makeSmsVerifications = require('./sms-verifications');
const makeforgetPassword = require('./forget-password');
const makeConfirmForgetPassword = require('./confirm-forget-password');
const makeChangePassword = require('./change-password');
const makeGoogleLogin = require('./googleLogin');

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

const forgetPassword = makeforgetPassword({
  ApplicationError,
  logger,
  redis: redisClient,
  smsService
});

const confirmForgetPassword = makeConfirmForgetPassword({
  ApplicationError,
  logger,
  redis: redisClient
});

const changePassword = makeChangePassword({
  ApplicationError,
  logger
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

const googleAuth = makeGoogleAuthService({
  passport,
  GoogleStrategy,
  redis: redisClient
})();

const { faceBookData, loginService } = makeFacebookLogin({
  redis: redisClient
});

const { googleLoginGetter, googleLoginSetter } = makeGoogleLogin({
  redis: redisClient
});

const userUseCases = {
  registerUser,
  googleAuth,
  loginUser,
  googleLoginGetter,
  googleLoginSetter,
  facebookAuth,
  faceBookData,
  facebookLoginService,
  verifyPhone,
  forgetPassword,
  confirmForgetPassword,
  changePassword
  loginService
};

module.exports = userUseCases;
