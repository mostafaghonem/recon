const makeUserRegisterCtrl = require('./user-register');
const makeUserLoginCtrl = require('./user-login');
const makePhoneVerification = require('./sms-verification');
const {
  facebookAuthController,
  facebookAuthBackController,
  facebookUserData
} = require('./userController');

const registerUser = makeUserRegisterCtrl({});
const loginUser = makeUserLoginCtrl({});
const verifyPhone = makePhoneVerification({});

const userCtrl = Object.freeze({
  registerUser,
  loginUser,
  verifyPhone,
  facebookAuth: facebookAuthController,
  facebookAuthBack: facebookAuthBackController,
  getFacebookUserData: facebookUserData
});

module.exports = userCtrl;
