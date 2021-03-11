const { Builder, ValidatorHelper } = require('validation-helpers');
const _ = require('lodash');
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;
const { defaultConstants, locations } = require('../../../shared/constants');
const { ErrorText } = require('../../../shared/errors');

const makeAddclearanceValidation = require('./add-clearance-validation');
const makeDeleteClearanceValidation = require('./delete-clearance-validation');
const makeEditClearanceValidation = require('./edit-clearance-validation');
const makeGetValidation = require('./get-clearance-validation');
const makeGetClearancesValidation = require('./get-clearances-validation');

const armyList = defaultConstants.ARMY_LIST.map(o => o.value);
const forcesList = defaultConstants.FORCES_LIST.map(o => o.value);
const recruitmentLevels = defaultConstants.RECRUITMENT_LEVELS.map(o => o.value);
const educationRanks = defaultConstants.EDUCATION_RANKS.map(o => o.value);
const situations = defaultConstants.SITUATIONS.map(o => o.value);
const recruitmentAreas = locations.recruitmentAreas.map(o => o.value);
const governates = locations.governates.map(o => o.value);
const sortValues = Object.values(defaultConstants.SORT_VALUES);
const sortKeys = Object.values(defaultConstants.SORT_KEYS);

module.exports.addClearanceValidation = makeAddclearanceValidation({
  _,
  ErrorText,
  ValidatorHelper,
  Builder,
  ObjectId,
  armyList,
  forcesList,
  recruitmentLevels,
  educationRanks,
  situations,
  recruitmentAreas,
  governates
});

module.exports.deleteClearanceValidation = makeDeleteClearanceValidation({
  _,
  ErrorText,
  ValidatorHelper,
  Builder,
  ObjectId
});

module.exports.editClearanceValidation = makeEditClearanceValidation({
  _,
  ErrorText,
  ValidatorHelper,
  Builder,
  ObjectId,
  armyList,
  forcesList,
  recruitmentLevels,
  educationRanks,
  situations,
  recruitmentAreas,
  governates
});

module.exports.getClearanceValidation = makeGetValidation({
  _,
  ErrorText,
  ValidatorHelper,
  Builder,
  ObjectId,
  sortValues,
  sortKeys
});

module.exports.getClearancesValidation = makeGetClearancesValidation({
  _,
  ErrorText,
  ValidatorHelper,
  Builder,
  ObjectId,
  sortValues,
  sortKeys,
  armyList,
  forcesList,
  recruitmentLevels,
  educationRanks,
  situations,
  recruitmentAreas,
  governates
});
