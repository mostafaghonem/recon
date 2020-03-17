const { Builder, ValidatorHelper } = require('validation-helpers');
const _ = require('lodash');
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;
const { defaultConstants } = require('../../../shared/constants');

const makeAddunitValidation = require('./add-unit-validation');
const makeDeleteUnitValidation = require('./delete-unit-validation');
const makeGetMyUnitsValidation = require('./get-my-units-validation');
const makeGetMyUnitValidation = require('./get-my-unit-validation');
// const makeAddunitRoomsValidation = require('./add-unit-rooms-validation');
// const makeHideunitValidation = require('./hide-unit-validation');
// const makeUnhideunitValidation = require('./unhide-unit-validation');
// const makeDeleteunitValidation = require('./delete-unit-validation');
// const makeGetunitsValidation = require('./get-units-validation');
// const makeGetRecommendedunitsValidation = require('./get-recommended-units-validation');
// const makeEditunitValidation = require('./edit-unit-validation');
// const makeEditunitRoomsValidation = require('./edit-unit-rooms-validation');
// const makeEditunitAvailabilityValidation = require('./edit-unit-availability-validation');
// const makeGetunitValidation = require('./get-unit-validation');
// const makeRateunitValidation = require('./rate-unit-validation');

const unitTypes = Object.values(defaultConstants.UNIT_TYPES);
const unitServices = Object.values(defaultConstants.UNIT_SERVICES);
const PricePer = Object.values(defaultConstants.PRICE_PER);
const currencies = Object.values(defaultConstants.CURRENCIES);
const rentersType = Object.values(defaultConstants.RENTERS_TYPES);

module.exports.addUnitValidation = makeAddunitValidation({
  _,
  ValidatorHelper,
  Builder,
  rentersType,
  unitTypes,
  PricePer,
  currencies,
  unitServices
});

module.exports.deleteUnitValidation = makeDeleteUnitValidation({
  _,
  ValidatorHelper,
  Builder,
  ObjectId
});

module.exports.getMyUnitsValidation = makeGetMyUnitsValidation({
  _,
  ValidatorHelper,
  Builder,
  ObjectId
});

module.exports.getMyUnitValidation = makeGetMyUnitValidation({
  _,
  ValidatorHelper,
  Builder,
  ObjectId
});
