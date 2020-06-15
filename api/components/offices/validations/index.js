const { Builder, ValidatorHelper } = require('validation-helpers');
const _ = require('lodash');
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;

const makeAddOfficeValidation = require('./add-office-validation');
const makeAddOfficeOfficesValidation = require('./add-office-offices-validation');
const makeHideOfficeValidation = require('./hide-office-validation');
const makeUnhideOfficeValidation = require('./unhide-office-validation');
const makeDeleteOfficeValidation = require('./delete-office-validation');
const makeGetOfficesValidation = require('./get-offices-validation');
const makeGetRecommendedOfficesValidation = require('./get-recommended-offices-validation');
const makeEditOfficeValidation = require('./edit-office-validation');
const makeEditOfficeOfficesValidation = require('./edit-office-offices-validation');
const makeEditOfficeAvailabilityValidation = require('./edit-office-availability-validation');
const makeGetOfficeValidation = require('./get-office-validation');
const makeRateOfficeValidation = require('./rate-office-validation');
const makeGetAvailabilityData = require('./get-Availability-data');

const { defaultConstants } = require('../../../shared/constants');

const freeServices = Object.values(defaultConstants.OFFICEFREESERVICES);
const generalServices = Object.values(defaultConstants.OFFICEGENERALSERVICES);
const officeServices = Object.values(defaultConstants.OFFICESERVICES);
const entertainmentServices = Object.values(
  defaultConstants.OFFICEENTERTAINMENTSERVICES
);
const officesTypes = Object.values(defaultConstants.OFFICES_TYPES);
const officesStatus = Object.values(defaultConstants.OFFICES_STATUS);
const pricePer = Object.values(defaultConstants.PRICE_PER);
const currencies = Object.values(defaultConstants.CURRENCIES);

module.exports.addOfficeValidation = makeAddOfficeValidation({
  _,
  Builder,
  ValidatorHelper,
  currencies,
  freeServices,
  generalServices,
  officeServices,
  entertainmentServices
});

module.exports.addOfficeOfficesValidation = makeAddOfficeOfficesValidation({
  _,
  Builder,
  ValidatorHelper,
  ObjectId,
  officesTypes,
  pricePer
});

module.exports.hideOfficeValidation = makeHideOfficeValidation({
  _,
  Builder,
  ValidatorHelper,
  ObjectId
});

module.exports.getAvailabilityData = makeGetAvailabilityData({
  _,
  Builder,
  ValidatorHelper,
  ObjectId
});

module.exports.unhideOfficeValidation = makeUnhideOfficeValidation({
  _,
  Builder,
  ValidatorHelper,
  ObjectId
});

module.exports.deleteOfficeValidation = makeDeleteOfficeValidation({
  _,
  Builder,
  ValidatorHelper,
  ObjectId
});

module.exports.getOffices = makeGetOfficesValidation({
  _,
  Builder,
  ValidatorHelper,
  ObjectId,
  officesTypes,
  freeServices,
  generalServices,
  officeServices,
  entertainmentServices
});

module.exports.getRecommendedOffices = makeGetRecommendedOfficesValidation({
  _,
  Builder,
  ValidatorHelper
});

module.exports.editOffice = makeEditOfficeValidation({
  _,
  Builder,
  ValidatorHelper,
  ObjectId,
  currencies,
  freeServices,
  generalServices,
  officeServices,
  entertainmentServices
});

module.exports.editOfficeOffices = makeEditOfficeOfficesValidation({
  _,
  Builder,
  ValidatorHelper,
  ObjectId,
  officesTypes,
  pricePer
});

module.exports.editOfficeAvailability = makeEditOfficeAvailabilityValidation({
  _,
  Builder,
  ValidatorHelper,
  ObjectId,
  officesStatus
});

module.exports.getOffice = makeGetOfficeValidation({
  _,
  Builder,
  ValidatorHelper,
  ObjectId
});

module.exports.rateOffice = makeRateOfficeValidation({
  _,
  Builder,
  ValidatorHelper,
  ObjectId
});
