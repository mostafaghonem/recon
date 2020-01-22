const { Builder, ValidatorHelper } = require('validation-helpers');
const _ = require('lodash');

const { defaultConstants } = require('../../../shared/constants');

const genderEnum = Object.values(defaultConstants.GENDER_TYPES);
const jobTypeEnum = Object.values(defaultConstants.JOB_TYPES);

const makeUserRegisterValidation = require('./user-register-validation');
const makeUserLoginValidation = require('./user-login-validation');
const makeUserPhoneVerificationValidation = require('./phone-verification-validation');
const makeForgetPasswordValidation = require('./forget-password-validation');

module.exports.userRegisterValidation = makeUserRegisterValidation({
  _,
  Builder,
  ValidatorHelper,
  genderEnum,
  jobTypeEnum
});

module.exports.userLoginValidation = makeUserLoginValidation({
  _,
  Builder,
  ValidatorHelper
});

module.exports.forgetPasswordValidation = makeForgetPasswordValidation({
  _,
  Builder,
  ValidatorHelper
});

module.exports.phoneVerificationValidation = makeUserPhoneVerificationValidation(
  {
    _,
    Builder,
    ValidatorHelper
  }
);
