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
  addIdentityRequests,
  getUserIdentityStatus
} = require('../../identityRequests/identityRequests-external-use-cases');
const {
  getUserHostels,
  getHouseOwnerHostel,
  getUserHostelsCount
} = require('../../hostels/hostels-external-use-cases');
const { PERMISSIONS } = require('../../../shared/constants/defaults');
const { GetSortObj } = require('../../../shared/constants/methods');
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
const makeConfirmUpdatePassword = require('./confirm-update-password');
const makeChangePassword = require('./change-password');
const makeUpdatePasswordCode = require('./update-password-code');
const makeUpdateUserPassword = require('./update-user-password');
const makeGetUserProfile = require('./get-profile');
const makeUpdateUserProfile = require('./update-profile');
const makeUpdateUserPhone = require('./update-phone');
const makePhoneUpdateVerification = require('./phone-update-verifiction');
const makeGetHouseOwnerInfo = require('./houseOwner-info');
const makeGetUploadedHostelsCount = require('./get-uploaded-hostels-count');
const makeGetUploadedHostels = require('./get-uploaded-hostels');
const makeGetUploadedHostelDetails = require('./get-uploaded-hostel-details');
const makeGoogleLogin = require('./googleLogin');

const makeAddUnitToFavorites = require('./add-unit-to-favorite');
const makRemoveUnitFromFavorites = require('./remove-unit-from-favorite');
const makeGetFavoriteUnits = require('./get-favorite-units');

const makeAddHostelToFavorites = require('./add-hostel-to-favorite');
const makRemoveHostelFromFavorites = require('./remove-hostel-from-favorite');
const makeGetFavoriteHostels = require('./get-favorite-hostels');

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

const confirmUpdatePassword = makeConfirmUpdatePassword({
  ApplicationError,
  logger,
  redis: redisClient
});

const changePassword = makeChangePassword({
  ApplicationError,
  logger,
  redis: redisClient
});

const updatePasswordCode = makeUpdatePasswordCode({
  ApplicationError,
  logger,
  redis: redisClient,
  smsService
});

const updateUserPassword = makeUpdateUserPassword({
  ApplicationError,
  logger,
  redis: redisClient
});

const getUserProfile = makeGetUserProfile({
  ApplicationError,
  logger,
  getUserIdentityStatus
});

const getHouseOwnerInfo = makeGetHouseOwnerInfo({
  ApplicationError,
  logger,
  PERMISSIONS
});

const getUploadedHostels = makeGetUploadedHostels({
  ApplicationError,
  logger,
  getUserHostels
});

const getUploadedHostelsCount = makeGetUploadedHostelsCount({
  ApplicationError,
  logger,
  getUserHostelsCount
});

const getUploadedHostelDetails = makeGetUploadedHostelDetails({
  ApplicationError,
  logger,
  getHouseOwnerHostel
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

const addUnitToFavorites = makeAddUnitToFavorites({
  ApplicationError,
  logger
});
const removeUnitFromFavorites = makRemoveUnitFromFavorites({
  ApplicationError
});
const getFavoriteUnits = makeGetFavoriteUnits({ ApplicationError, GetSortObj });

const addHostelToFavorites = makeAddHostelToFavorites({
  ApplicationError,
  logger
});
const removeHostelFromFavorites = makRemoveHostelFromFavorites({
  ApplicationError
});
const getFavoriteHostels = makeGetFavoriteHostels({
  ApplicationError,
  GetSortObj
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
  confirmUpdatePassword,
  getUserProfile,
  getHouseOwnerInfo,
  updateUserProfile,
  getUploadedHostels,
  getUploadedHostelsCount,
  getUploadedHostelDetails,
  phoneUpdateVerification,
  updateUserPhone,
  updateIdentification,
  changePassword,
  updatePasswordCode,
  updateUserPassword,
  addUnitToFavorites,
  removeUnitFromFavorites,
  getFavoriteUnits,
  addHostelToFavorites,
  removeHostelFromFavorites,
  getFavoriteHostels
};

module.exports = userUseCases;
