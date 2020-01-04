const makeUserRegisterCtrl = require('./user-register');

const registerUser = makeUserRegisterCtrl({});

const userCtrl = Object.freeze({
  registerUser
});

module.exports = userCtrl;
