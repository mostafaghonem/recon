const makeUserRegisterCtrl = require('./user-register');
const makeUserLoginCtrl = require('./user-login');

// ->
const registerUser = makeUserRegisterCtrl({});
const loginUser = makeUserLoginCtrl({});

const hostelsCtrl = Object.freeze({
  registerUser,
  loginUser
});

module.exports = hostelsCtrl;
