const { Builder, ValidatorHelper } = require('validation-helpers');
const _ = require('lodash');
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;
const { defaultConstants } = require('../../../shared/constants');

const makeCreateunitValidation = require('./create-event-validation');
const makeDeleteUnitValidation = require('./delete-event-validation');
const makeEditUnitValidation = require('./update-event-validation');
const makeGetValidation = require('./get-event-validation');
const makeGetUnitsValidation = require('./get-events-validation');

const eventsType = Object.values(defaultConstants.EVENTS_TYPES);
const objectsTypes = Object.values(defaultConstants.OBJECTS_TYPES);

module.exports.createUnitValidation = makeCreateunitValidation({
  _,
  ValidatorHelper,
  Builder
});

module.exports.deleteUnitValidation = makeDeleteUnitValidation({
  _,
  ValidatorHelper,
  Builder,
  ObjectId
});

module.exports.editUnitValidation = makeEditUnitValidation({
  _,
  ValidatorHelper,
  Builder,
  ObjectId,
  eventsType,
  objectsTypes
});

module.exports.getUnitValidation = makeGetValidation({
  _,
  ValidatorHelper,
  Builder,
  ObjectId
});

module.exports.getUnitsValidation = makeGetUnitsValidation({
  _,
  ValidatorHelper,
  Builder,
  ObjectId,
  eventsType,
  objectsTypes
});
