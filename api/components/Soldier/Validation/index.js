const { Builder, ValidatorHelper } = require('validation-helpers');
const _ = require('lodash');
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;
const { defaultConstants } = require('../../../shared/constants');

const makeAddsoldierValidation = require('./add-soldier-validation');
const makeDeleteSoldierValidation = require('./delete-soldier-validation');
const makeEditSoldierValidation = require('./edit-soldier-validation');
const makeHideSoldierValidation = require('./hide-soldier-validation');
const makeUnhideSoldierValidation = require('./unhide-soldier-validation');
const makeGetValidation = require('./get-soldier-validation');
const makeGetSoldiersValidation = require('./get-soldiers-validation');

const soldierTypes = Object.values(defaultConstants.UNIT_TYPES);
const soldierServices = Object.values(defaultConstants.UNIT_SERVICES);
const PricePer = Object.values(defaultConstants.PRICE_PER);
const currencies = Object.values(defaultConstants.CURRENCIES);
const rentersType = Object.values(defaultConstants.RENTERS_TYPES);
const sortValues = Object.values(defaultConstants.SORT_VALUES);
const sortKeys = Object.values(defaultConstants.SORT_KEYS);

module.exports.addSoldierValidation = makeAddsoldierValidation({
  _,
  ValidatorHelper,
  Builder,
  rentersType,
  soldierTypes,
  PricePer,
  currencies,
  soldierServices
});

module.exports.deleteSoldierValidation = makeDeleteSoldierValidation({
  _,
  ValidatorHelper,
  Builder,
  ObjectId
});

module.exports.hideSoldierValidation = makeHideSoldierValidation({
  _,
  ValidatorHelper,
  Builder,
  ObjectId
});

module.exports.unhideSoldierValidation = makeUnhideSoldierValidation({
  _,
  ValidatorHelper,
  Builder,
  ObjectId
});

module.exports.editSoldierValidation = makeEditSoldierValidation({
  _,
  ValidatorHelper,
  Builder,
  ObjectId,
  rentersType,
  soldierTypes,
  PricePer,
  currencies,
  soldierServices
});

module.exports.getSoldierValidation = makeGetValidation({
  _,
  ValidatorHelper,
  Builder,
  ObjectId,
  sortValues,
  sortKeys
});

module.exports.getSoldiersValidation = makeGetSoldiersValidation({
  _,
  ValidatorHelper,
  Builder,
  ObjectId,
  rentersType,
  soldierTypes,
  PricePer,
  currencies,
  soldierServices,
  sortValues,
  sortKeys
});
