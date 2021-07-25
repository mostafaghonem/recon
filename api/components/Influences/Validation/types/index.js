const { Builder, ValidatorHelper } = require('validation-helpers');
const _ = require('lodash');
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;
const { defaultConstants, locations } = require('../../../../shared/constants');

const makePromotionValidation = require('./promotion-validation');
const makeDemotionValidation = require('./demotion-validation');
const makeExecutionValidation = require('./execution-validation');
const makeFleeVlidation = require('./flee-validation');
const makeComebackValidation = require('./comeback-validation');
const makeDriversLicenseValidation = require('./driversLicense-validation');
const makeTrainingValidation = require('./training-validation');
const makeTravellingValidation = require('./travelling-validation');
const makePunishmentsValidation = require('./punishments-validation');
const makeLiteracyValidation = require('./literacy-validation');

const ranks = defaultConstants.RANKS;
const graduationLevels = defaultConstants.GRADUATION_LEVELS;
const degrees = defaultConstants.DEGREES;
const governates = locations.governates;

const promotionValidation = makePromotionValidation({
  _,
  ValidatorHelper,
  Builder,
  ObjectId,
  ranks
});
const demotionValidation = makeDemotionValidation({
  _,
  ValidatorHelper,
  Builder,
  ObjectId,
  ranks
});
const executionValidation = makeExecutionValidation({
  _,
  ValidatorHelper,
  Builder,
  ObjectId,
  ranks
});
const fleeValidation = makeFleeVlidation({
  _,
  ValidatorHelper,
  Builder,
  ObjectId
});
const comebackValidation = makeComebackValidation({
  _,
  ValidatorHelper,
  Builder,
  ObjectId
});
const driversLicenseValidation = makeDriversLicenseValidation({
  _,
  ValidatorHelper,
  Builder,
  ObjectId
});
const trainingValidation = makeTrainingValidation({
  _,
  ValidatorHelper,
  Builder,
  ObjectId
});
const travellingValidation = makeTravellingValidation({
  _,
  ValidatorHelper,
  Builder,
  ObjectId
});
const punishmentsValidation = makePunishmentsValidation({
  _,
  ValidatorHelper,
  Builder,
  ObjectId
});

const literacyValidation = makeLiteracyValidation({
  degrees,
  governates,
  graduationLevels,
  _,
  ValidatorHelper,
  Builder,
  ObjectId
});
module.exports = {
  promotionValidation,
  demotionValidation,
  executionValidation,
  fleeValidation,
  comebackValidation,
  driversLicenseValidation,
  trainingValidation,
  travellingValidation,
  punishmentsValidation,
  literacyValidation
};
