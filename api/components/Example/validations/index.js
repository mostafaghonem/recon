const { Builder, ValidatorHelper } = require('validation-helpers');
const _ = require('lodash');
const makeGetExamplesValidation = require('./get-examples-validation');

module.exports.getExamplesValidation = makeGetExamplesValidation({
  _,
  Builder,
  ValidatorHelper
});
