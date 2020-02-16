const { Builder, ValidatorHelper } = require('validation-helpers');
const _ = require('lodash');
const reserveValidations = require('./reserveValidations');

module.exports.Working = () => {
  return { error: undefined };
};

module.exports.reserveValidations = reserveValidations(
  _,
  Builder,
  ValidatorHelper
);
