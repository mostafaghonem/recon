const { Builder, ValidatorHelper } = require('validation-helpers');
const _ = require('lodash');
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;
const { defaultConstants, locations } = require('../../../shared/constants');
const { ErrorText } = require('../../../shared/errors');

const makeAddstaffValidation = require('./add-staff-validation');
const makeDeleteStaffValidation = require('./delete-staff-validation');
const makeEditStaffValidation = require('./edit-staff-validation');
const makeHideStaffValidation = require('./hide-staff-validation');
const makeUnhideStaffValidation = require('./unhide-staff-validation');
const makeGetValidation = require('./get-staff-validation');
const makeGetStaffsValidation = require('./get-staffs-validation');

const armyList = defaultConstants.ARMY_LIST.map(o => o.value);
const forcesList = defaultConstants.FORCES_LIST.map(o => o.value);
const recruitmentLevels = defaultConstants.RECRUITMENT_LEVELS.map(o => o.value);
const educationRanks = defaultConstants.EDUCATION_RANKS.map(o => o.value);
const situations = defaultConstants.SITUATIONS.map(o => o.value);
const recruitmentAreas = locations.recruitmentAreas.map(o => o.value);
const governates = locations.governates.map(o => o.value);
const sortValues = Object.values(defaultConstants.SORT_VALUES);
const sortKeys = Object.values(defaultConstants.SORT_KEYS);

module.exports.addStaffValidation = makeAddstaffValidation({
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

module.exports.deleteStaffValidation = makeDeleteStaffValidation({
  _,
  ErrorText,
  ValidatorHelper,
  Builder,
  ObjectId
});

module.exports.hideStaffValidation = makeHideStaffValidation({
  _,
  ErrorText,
  ValidatorHelper,
  Builder,
  ObjectId
});

module.exports.unhideStaffValidation = makeUnhideStaffValidation({
  _,
  ErrorText,
  ValidatorHelper,
  Builder,
  ObjectId
});

module.exports.editStaffValidation = makeEditStaffValidation({
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

module.exports.getStaffValidation = makeGetValidation({
  _,
  ErrorText,
  ValidatorHelper,
  Builder,
  ObjectId,
  sortValues,
  sortKeys
});

module.exports.getStaffsValidation = makeGetStaffsValidation({
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
