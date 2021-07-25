const { Builder, ValidatorHelper } = require('validation-helpers');
const _ = require('lodash');
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;
const { defaultConstants, locations } = require('../../../shared/constants');
const { ErrorText } = require('../../../shared/errors');

const makeAddrecommendationValidation = require('./add-recommendation-validation');
const makeDeleteRecommendationValidation = require('./delete-recommendation-validation');
const makeEditRecommendationValidation = require('./edit-recommendation-validation');
const makeHideRecommendationValidation = require('./hide-recommendation-validation');
const makeUnhideRecommendationValidation = require('./unhide-recommendation-validation.js');
const makeGetValidation = require('./get-recommendation-validation');
const makeGetRecommendationsValidation = require('./get-recommendations-validation');
const makeIsDuplicateValidation = require('./is-duplicate-validation');

const armyList = defaultConstants.ARMY_LIST.map(o => o.value);
const forcesList = defaultConstants.FORCES_LIST.map(o => o.value);
const recruitmentLevels = defaultConstants.RECRUITMENT_LEVELS.map(o => o.value);
const educations = defaultConstants.EDUCATION_RANKS.map(o => o.value);
const situations = defaultConstants.SITUATIONS.map(o => o.value);
const recruitmentAreas = locations.recruitmentAreas.map(o => o.value);
const governates = locations.governates.map(o => o.value);
const sortValues = Object.values(defaultConstants.SORT_VALUES);
const sortKeys = Object.values(defaultConstants.SORT_KEYS);

module.exports.addRecommendationValidation = makeAddrecommendationValidation({
  _,
  ErrorText,
  ValidatorHelper,
  Builder,
  ObjectId,
  armyList,
  forcesList,
  recruitmentLevels,
  educations,
  situations,
  recruitmentAreas,
  governates
});

module.exports.deleteRecommendationValidation = makeDeleteRecommendationValidation(
  {
    _,
    ErrorText,
    ValidatorHelper,
    Builder,
    ObjectId
  }
);

module.exports.hideRecommendationValidation = makeHideRecommendationValidation({
  _,
  ErrorText,
  ValidatorHelper,
  Builder,
  ObjectId
});

module.exports.unhideRecommendationValidation = makeUnhideRecommendationValidation(
  {
    _,
    ErrorText,
    ValidatorHelper,
    Builder,
    ObjectId
  }
);

module.exports.editRecommendationValidation = makeEditRecommendationValidation({
  _,
  ErrorText,
  ValidatorHelper,
  Builder,
  ObjectId,
  armyList,
  forcesList,
  recruitmentLevels,
  educations,
  situations,
  recruitmentAreas,
  governates
});

module.exports.getRecommendationValidation = makeGetValidation({
  _,
  ErrorText,
  ValidatorHelper,
  Builder,
  ObjectId,
  sortValues,
  sortKeys
});

module.exports.isDuplicateValidation = makeIsDuplicateValidation({
  _,
  ErrorText,
  ValidatorHelper,
  Builder
});

module.exports.getRecommendationsValidation = makeGetRecommendationsValidation({
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
  educations,
  situations,
  recruitmentAreas,
  governates
});
