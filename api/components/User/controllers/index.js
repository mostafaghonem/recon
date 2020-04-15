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
const makeAddUnitToFavorites = require('./add-unit-to-favorite');
const makeRemoveUnitFromFavorites = require('./remove-unit-from-favorite');
const makeGetFavoriteUnits = require('./get-favorite-units');
const makeAddHostelToFavorites = require('./add-hostel-to-favorite');
const makeRemoveHostelFromFavorites = require('./remove-hostel-from-favorite');
const makeGetFavoriteHostels = require('./get-favorite-hostels');
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
  GetBaseDomain
} = require('../../../shared/constants');

const pagination = Object.freeze(defaultConstants.PAGINATION);

// ->
const registerUser = makeUserRegisterCtrl({});
const loginUser = makeUserLoginCtrl({ GetBaseDomain });
const logOutUser = makeUserLogOutCtrl({ GetBaseDomain });
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
const addUnitToFavorites = makeAddUnitToFavorites({});
const removeUnitFromFavorites = makeRemoveUnitFromFavorites({});
const getFavoriteUnits = makeGetFavoriteUnits({ pagination });

const addHostelToFavorites = makeAddHostelToFavorites({});
const removeHostelFromFavorites = makeRemoveHostelFromFavorites({});
const getFavoriteHostels = makeGetFavoriteHostels({ pagination });
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
  getFacebookUserData: facebookUserData,
  addUnitToFavorites,
  removeUnitFromFavorites,
  getFavoriteUnits,
  addHostelToFavorites,
  removeHostelFromFavorites,
  getFavoriteHostels
});

module.exports = userCtrl;
