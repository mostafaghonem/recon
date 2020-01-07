const { Builder, ValidatorHelper } = require('validation-helpers');
const _ = require('lodash');
const makeUserRegisterValidation = require('./user-register-validation');

module.exports.userRegisterValidation = makeUserRegisterValidation({
  _,
  Builder,
  ValidatorHelper
});
