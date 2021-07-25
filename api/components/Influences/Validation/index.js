const { Builder, ValidatorHelper } = require('validation-helpers');
const _ = require('lodash');
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;
const { defaultConstants } = require('../../../shared/constants');

const makeAddInfluenceValidation = require('./add-influence-validation');
const makeDeleteInfluenceValidation = require('./delete-influence-validation');
const makeEditInfluenceValidation = require('./edit-influence-validation');
const makeHideInfluenceValidation = require('./hide-influence-validation');
const makeUnhideInfluenceValidation = require('./unhide-influence-validation');
const makeGetValidation = require('./get-influence-validation');
const makeGetInfluencesValidation = require('./get-influences-validation');

const typesValidation = require('./types');

const influenceTypes = defaultConstants.INFLUENCES_TYPES;

const sortValues = Object.values(defaultConstants.SORT_VALUES);
const sortKeys = Object.values(defaultConstants.SORT_KEYS);

module.exports.addInfluenceValidation = makeAddInfluenceValidation({
  _,
  ValidatorHelper,
  Builder,
  ObjectId,
  influenceTypes,
  typesValidation
});

module.exports.deleteInfluenceValidation = makeDeleteInfluenceValidation({
  _,
  ValidatorHelper,
  Builder,
  ObjectId
});

module.exports.hideInfluenceValidation = makeHideInfluenceValidation({
  _,
  ValidatorHelper,
  Builder,
  ObjectId
});

module.exports.unhideInfluenceValidation = makeUnhideInfluenceValidation({
  _,
  ValidatorHelper,
  Builder,
  ObjectId
});

module.exports.editInfluenceValidation = makeEditInfluenceValidation({
  _,
  ValidatorHelper,
  influenceTypes,
  typesValidation,
  Builder,
  ObjectId
});

module.exports.getInfluenceValidation = makeGetValidation({
  _,
  ValidatorHelper,
  Builder,
  ObjectId,
  influenceTypes,
  typesValidation,
  sortValues,
  sortKeys
});

module.exports.getInfluencesValidation = makeGetInfluencesValidation({
  _,
  ValidatorHelper,
  Builder,
  ObjectId,
  influenceTypes,
  typesValidation,
  sortValues,
  sortKeys
});
