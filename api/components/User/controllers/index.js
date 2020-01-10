const makeUserRegisterCtrl = require('./user-register');
const makeUserLoginCtrl = require('./user-login');
const { facebookAuthController } = require('./userController');

const registerUser = makeUserRegisterCtrl({});
const loginUser = makeUserLoginCtrl({});

const userCtrl = Object.freeze({
  registerUser,
  loginUser
  facebookAuth: facebookAuthController
});

module.exports = userCtrl;
