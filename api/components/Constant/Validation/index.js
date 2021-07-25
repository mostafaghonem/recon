const { Builder, ValidatorHelper } = require('validation-helpers');
const _ = require('lodash');
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;
const { defaultConstants } = require('../../../shared/constants');
const { ErrorText } = require('../../../shared/errors');

const makeAddConstantValidation = require('./add-constant-validation');
const makeDeleteConstantValidation = require('./delete-constant-validation');

const makeHideConstantValidation = require('./hide-constant-validation');
const makeUnhideConstantValidation = require('./unhide-constant-validation');
const makeGetConstantsValidation = require('./get-constant-validation');

const sortValues = Object.values(defaultConstants.SORT_VALUES);
const sortKeys = Object.values(defaultConstants.SORT_KEYS);

module.exports.addConstantValidation = makeAddConstantValidation({
  _,
  ErrorText,
  ValidatorHelper,
  Builder,
  ObjectId,
  branchesList: defaultConstants.BRANCHES
});

module.exports.deleteConstantValidation = makeDeleteConstantValidation({
  _,
  ErrorText,
  ValidatorHelper,
  Builder,
  ObjectId
});

module.exports.hideConstantValidation = makeHideConstantValidation({
  _,
  ErrorText,
  ValidatorHelper,
  Builder,
  ObjectId
});

module.exports.unhideConstantValidation = makeUnhideConstantValidation({
  _,
  ErrorText,
  ValidatorHelper,
  Builder,
  ObjectId
});

module.exports.getConstantsValidation = makeGetConstantsValidation({
  _,
  ErrorText,
  ValidatorHelper,
  Builder,
  ObjectId,
  sortValues,
  sortKeys
});
