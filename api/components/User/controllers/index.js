const makeUserRegisterCtrl = require('./user-register');
const makeUserLoginCtrl = require('./user-login');
const makeUserLogOutCtrl = require('./user-logout');
const makePhoneVerification = require('./sms-verification');
const makeForgetPassword = require('./forget-password');
const makeConfirmForgetPassword = require('./confirm-forget-password');
const makeConfirmUpdatePassword = require('./confirm-update-password');
const makeChangePassword = require('./change-password');
const makeUpdateUserPassword = require('./update-user-password');
const makeUpdatePasswordCode = require('./update-password-code');
const makeGetUserProfile = require('./get-profile');
const makeUpdateUserProfile = require('./update-profile');
const makeUpdatePhone = require('./update-phone');
const makePhoneUpdateVerification = require('./phone-update-verification');
const makeGetHouseOwnerInfo = require('./houseOwner-info');
const makeGetHouseOwnerInfoWithCi = require('./houseOwner-info-with-ci');
const makeGetUploadedHostelsCount = require('./get-uploaded-hostels-count');
const makeGetUploadedHostels = require('./get-uploaded-hostels');
const makeGetUploadedHostelDetails = require('./get-uploaded-hostel-details');
const {
  facebookAuthController,
  facebookAuthBackController,
  facebookUserData,
  googleAuthCallback,
  googleAuthController,
  googleUserData
} = require('./userController');

const {
  defaultConstants,
  getBaseDomain
} = require('../../../shared/constants');

const pagination = Object.freeze(defaultConstants.PAGINATION);

// ->
const registerUser = makeUserRegisterCtrl({});
const loginUser = makeUserLoginCtrl({ getBaseDomain });
const logOutUser = makeUserLogOutCtrl({});
const verifyPhone = makePhoneVerification({});
const forgetPassword = makeForgetPassword({});
const confirmForgetPassword = makeConfirmForgetPassword({});
const confirmUpdatePassword = makeConfirmUpdatePassword({});
const changePassword = makeChangePassword({});
const updatePasswordCode = makeUpdatePasswordCode({});
const updateUserPassword = makeUpdateUserPassword({});
const getUserProfile = makeGetUserProfile({});
const updateUserProfile = makeUpdateUserProfile({});
const updatePhone = makeUpdatePhone({});
const phoneUpdateVerification = makePhoneUpdateVerification({});
const getHouseOwnerInfo = makeGetHouseOwnerInfo({});
const getHouseOwnerInfoWithCi = makeGetHouseOwnerInfoWithCi({});
const getUploadedHostelsCount = makeGetUploadedHostelsCount({});
const getUploadedHostels = makeGetUploadedHostels({ pagination });
const getUploadedHostelDetails = makeGetUploadedHostelDetails({});

const userCtrl = Object.freeze({
  registerUser,
  loginUser,
  logOutUser,
  verifyPhone,
  forgetPassword,
  updatePhone,
  confirmForgetPassword,
  confirmUpdatePassword,
  changePassword,
  updatePasswordCode,
  updateUserPassword,
  getUserProfile,
  updateUserProfile,
  phoneUpdateVerification,
  getHouseOwnerInfo,
  getHouseOwnerInfoWithCi,
  getUploadedHostelsCount,
  getUploadedHostels,
  getUploadedHostelDetails,
  googleAuthController,
  googleAuthCallback,
  getGoogleUserData: googleUserData,
  facebookAuth: facebookAuthController,
  facebookAuthBack: facebookAuthBackController,
  getFacebookUserData: facebookUserData
});

module.exports = userCtrl;
