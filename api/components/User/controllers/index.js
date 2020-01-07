const { facebookAuthController } = require('./userController');

const userCtrl = Object.freeze({
  facebookAuth: facebookAuthController
});

module.exports = userCtrl;
