const { Builder, ValidatorHelper } = require('validation-helpers');
const _ = require('lodash');
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;
const { defaultConstants } = require('../../../shared/constants');

const makeAdddivisionValidation = require('./add-division-validation');
const makeDeleteDivisionValidation = require('./delete-division-validation');
const makeEditDivisionValidation = require('./edit-division-validation');
const makeHideDivisionValidation = require('./hide-division-validation');
const makeUnhideDivisionValidation = require('./unhide-division-validation');
const makeGetValidation = require('./get-division-validation');
const makeGetDivisionsValidation = require('./get-divisions-validation');

const sortValues = Object.values(defaultConstants.SORT_VALUES);
const sortKeys = Object.values(defaultConstants.SORT_KEYS);

module.exports.addDivisionValidation = makeAdddivisionValidation({
  _,
  ValidatorHelper,
  Builder
});

module.exports.deleteDivisionValidation = makeDeleteDivisionValidation({
  _,
  ValidatorHelper,
  Builder,
  ObjectId
});

module.exports.hideDivisionValidation = makeHideDivisionValidation({
  _,
  ValidatorHelper,
  Builder,
  ObjectId
});

module.exports.unhideDivisionValidation = makeUnhideDivisionValidation({
  _,
  ValidatorHelper,
  Builder,
  ObjectId
});

module.exports.editDivisionValidation = makeEditDivisionValidation({
  _,
  ValidatorHelper,
  Builder,
  ObjectId
});

module.exports.getDivisionValidation = makeGetValidation({
  _,
  ValidatorHelper,
  Builder,
  ObjectId,
  sortValues,
  sortKeys
});

module.exports.getDivisionsValidation = makeGetDivisionsValidation({
  _,
  ValidatorHelper,
  Builder,
  ObjectId,
  sortValues,
  sortKeys
});
