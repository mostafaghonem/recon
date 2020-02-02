/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case here in index and inject it to the method wrapper
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const redisClient = require('../../../shared/redis-client');
const logger = require('../../../startup/logger');
const { ApplicationError } = require('../../../shared/errors');
const smsService = require('../../../shared/services').smsService;
const {
  addIdentityRequests
} = require('../../identityRequests/indentityRequests-external-use-cases');
const { PERMISSIONS } = require('../../../shared/constants/defaults');
// const emailService = require('../../../shared/services').emailService;

const makeRegisterUserUC = require('./register-user');
const makeLoginUser = require('./login-user');
const makeUpdateIdentification = require('./update-identification');
const makeGoogleAuthService = require('./googleAuthService');
const makeFaceBookAuthService = require('./facebookAuthService');

const makeFacebookLogin = require('./facebookLogin');
const makeSmsVerifications = require('./sms-verifications');
const makeforgetPassword = require('./forget-password');
const makeConfirmForgetPassword = require('./confirm-forget-password');
const makeChangePassword = require('./change-password');
const makeGetUserProfile = require('./get-profile');
const makeUpdateUserProfile = require('./update-profile');
const makeUpdateUserPhone = require('./update-phone');
const makePhoneUpdateVerification = require('./phone-update-verifiction');
const makeGetHouseOwnerInfo = require('./houseOwner-info');
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
  logger,
  redis: redisClient
});

const getUserProfile = makeGetUserProfile({
  ApplicationError,
  logger
});

const getHouseOwnerInfo = makeGetHouseOwnerInfo({
  ApplicationError,
  logger,
  PERMISSIONS
});

const updateUserProfile = makeUpdateUserProfile({
  ApplicationError,
  logger,
  addIdentityRequests
});

const updateUserPhone = makeUpdateUserPhone({
  ApplicationError,
  logger,
  redis: redisClient
});

const updateIdentification = makeUpdateIdentification({
  ApplicationError,
  logger
});

const phoneUpdateVerification = makePhoneUpdateVerification({
  ApplicationError,
  logger,
  redis: redisClient,
  smsService
});

const loginUser = makeLoginUser({
  ApplicationError,
  logger
});

const facebookAuth = makeFaceBookAuthService({
  passport,
  FacebookStrategy
})();

const googleAuth = makeGoogleAuthService({
  passport,
  GoogleStrategy
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
  loginService,
  verifyPhone,
  forgetPassword,
  confirmForgetPassword,
  getUserProfile,
  getHouseOwnerInfo,
  updateUserProfile,
  phoneUpdateVerification,
  updateUserPhone,
  updateIdentification,
  changePassword
};

module.exports = userUseCases;
