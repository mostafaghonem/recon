const { Builder, ValidatorHelper } = require('validation-helpers');
const _ = require('lodash');
const reserveValidations = require('./reserveValidations');
const adminViewValidation = require('./adminViewValidation');

module.exports.reserveValidations = reserveValidations(
  _,
  Builder,
  ValidatorHelper
);

module.exports.adminViewValidation = adminViewValidation(
  _,
  Builder,
  ValidatorHelper
);
