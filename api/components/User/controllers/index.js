const makeUserRegisterCtrl = require('./user-register');
const makeUserLoginCtrl = require('./user-login');
const {
  facebookAuthController,
  facebookAuthBackController
} = require('./userController');

const registerUser = makeUserRegisterCtrl({});
const loginUser = makeUserLoginCtrl({});

const userCtrl = Object.freeze({
  registerUser,
  loginUser,
  facebookAuth: facebookAuthController,
  facebookAuthBack: facebookAuthBackController
});

module.exports = userCtrl;
