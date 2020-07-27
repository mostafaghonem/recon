const { Builder, ValidatorHelper } = require('validation-helpers');
const _ = require('lodash');
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;
const { defaultConstants, locations } = require('../../../shared/constants');

const makeAddsoldierValidation = require('./add-soldier-validation');
const makeDeleteSoldierValidation = require('./delete-soldier-validation');
const makeEditSoldierValidation = require('./edit-soldier-validation');
const makeHideSoldierValidation = require('./hide-soldier-validation');
const makeUnhideSoldierValidation = require('./unhide-soldier-validation');
const makeGetValidation = require('./get-soldier-validation');
const makeGetSoldiersValidation = require('./get-soldiers-validation');

const armyList = defaultConstants.ARMY_LIST.map(o => o.value);
const forcesList = defaultConstants.FORCES_LIST.map(o => o.value);
const recruitmentLevels = defaultConstants.RECRUITMENT_LEVELS.map(o => o.value);
const educationRanks = defaultConstants.EDUCATION_RANKS.map(o => o.value);
const situations = defaultConstants.SITUATIONS.map(o => o.value);
const recruitmentAreas = locations.recruitmentAreas.map(o => o.value);
const governates = locations.governates.map(o => o.value);
const sortValues = Object.values(defaultConstants.SORT_VALUES);
const sortKeys = Object.values(defaultConstants.SORT_KEYS);

module.exports.addSoldierValidation = makeAddsoldierValidation({
  _,
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
  armyList,
  forcesList,
  recruitmentLevels,
  educationRanks,
  situations,
  recruitmentAreas,
  governates
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
