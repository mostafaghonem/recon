const makeUserRegisterCtrl = require('./user-register');
const makeUserLoginCtrl = require('./user-login');
const {
  facebookAuthController,
  facebookAuthBackController,
  facebookUserData,
  googleAuthController
} = require('./userController');

// ->
const registerUser = makeUserRegisterCtrl({});
const loginUser = makeUserLoginCtrl({});

const userCtrl = Object.freeze({
  registerUser,
  loginUser,
  googleAuthController,
  facebookAuth: facebookAuthController,
  facebookAuthBack: facebookAuthBackController,
  getFacebookUserData: facebookUserData
});

module.exports = userCtrl;
