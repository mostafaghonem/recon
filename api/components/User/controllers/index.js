const makeUserRegisterCtrl = require('./user-register');
const makeUserLoginUserCtrl = require('./user-login');
const makeUserLoginAdminCtrl = require('./admin-login');
const makeUserLogOutCtrl = require('./user-logout');
const makeForgetPassword = require('./forget-password');
const makeConfirmForgetPassword = require('./confirm-forget-password');
const makeConfirmUpdatePassword = require('./confirm-update-password');
const makeChangePassword = require('./change-password');
const makeUpdateUserPassword = require('./update-user-password');
const makeUpdatePasswordCode = require('./update-password-code');
const makeGetUserProfile = require('./get-profile');
const makeUpdateUserProfile = require('./update-profile');

const { GetBaseDomain } = require('../../../shared/constants');

// ->
const registerUser = makeUserRegisterCtrl({});
const loginUser = makeUserLoginUserCtrl({ GetBaseDomain });
const loginAdmin = makeUserLoginAdminCtrl({ GetBaseDomain });
const logOutUser = makeUserLogOutCtrl({ GetBaseDomain });
const forgetPassword = makeForgetPassword({});
const confirmForgetPassword = makeConfirmForgetPassword({});
const confirmUpdatePassword = makeConfirmUpdatePassword({});
const changePassword = makeChangePassword({});
const updatePasswordCode = makeUpdatePasswordCode({});
const updateUserPassword = makeUpdateUserPassword({});
const getUserProfile = makeGetUserProfile({});
const updateUserProfile = makeUpdateUserProfile({});

const userCtrl = Object.freeze({
  registerUser,
  loginUser,
  loginAdmin,
  logOutUser,
  forgetPassword,
  confirmForgetPassword,
  confirmUpdatePassword,
  changePassword,
  updatePasswordCode,
  updateUserPassword,
  getUserProfile,
  updateUserProfile
});

module.exports = userCtrl;
