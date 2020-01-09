const makeUserRegisterCtrl = require('./user-register');
const makeUserLoginCtrl = require('./user-login');

const registerUser = makeUserRegisterCtrl({});
const loginUser = makeUserLoginCtrl({});

const userCtrl = Object.freeze({
  registerUser,
  loginUser
});

module.exports = userCtrl;
