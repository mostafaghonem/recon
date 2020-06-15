const { Builder, ValidatorHelper } = require('validation-helpers');
const _ = require('lodash');
const reserveValidations = require('./reserveValidations');
const adminViewValidation = require('./adminViewValidation');
const renterViewValidation = require('./renterViewValidation');
const officeViewValidation = require('./officeViewValidation');

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

module.exports.renterViewValidation = renterViewValidation(
  _,
  Builder,
  ValidatorHelper
);

module.exports.officeViewValidation = officeViewValidation(
  _,
  Builder,
  ValidatorHelper
);
