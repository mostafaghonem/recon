const { Builder, ValidatorHelper } = require('validation-helpers');
const _ = require('lodash');
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;

const { defaultConstants } = require('../../../shared/constants');

const genderEnum = Object.values(defaultConstants.GENDER_TYPES);
const jobTypeEnum = Object.values(defaultConstants.JOB_TYPES);
const requestStatus = Object.values(defaultConstants.REQUEST_STATUS);

const makeUserRegisterValidation = require('./user-register-validation');
const makeUserLoginValidation = require('./user-login-validation');

const makeForgetPasswordValidation = require('./forget-password-validation');
const makeConfirmForgetPasswordValidation = require('./confirm-forget-password-validation');
const makeConfirmUpdatePasswordValidation = require('./confirm-update-password-validation');
const makeChangePasswordValidation = require('./change-password');
const makeUpdateUserPasswordValidation = require('./update-user-password');
const makeUpdateProfileValidation = require('./update-profile');

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

module.exports.confirmForgetPasswordValidation = makeConfirmForgetPasswordValidation(
  {
    _,
    Builder,
    ValidatorHelper
  }
);

module.exports.changePasswordValidation = makeChangePasswordValidation({
  _,
  Builder,
  ValidatorHelper
});

module.exports.updateUserPasswordValidation = makeUpdateUserPasswordValidation({
  _,
  Builder,
  ValidatorHelper
});

module.exports.confirmUpdatePasswordValidation = makeConfirmUpdatePasswordValidation(
  {
    _,
    Builder,
    ValidatorHelper
  }
);

module.exports.updateProfile = makeUpdateProfileValidation({
  _,
  Builder,
  ValidatorHelper,
  genderEnum,
  jobTypeEnum
});
