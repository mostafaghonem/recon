const { Builder, ValidatorHelper } = require('validation-helpers');
const _ = require('lodash');
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;

const makeAddHostelValidation = require('./add-hostel-validation');
const makeAddHostelRoomsValidation = require('./add-hostel-rooms-validation');
const makeHideHostelValidation = require('./hide-hostel-validation');
const makeUnhideHostelValidation = require('./unhide-hostel-validation');
const makeDeleteHostelValidation = require('./delete-hostel-validation');
const makeGetHostelsValidation = require('./get-hostels-validation');
const makeEditHostelValidation = require('./edit-hostel-validation');
const makeEditHostelAvailabilityValidation = require('./edit-hostel-availability-validation');
const makeGetHostelValidation = require('./get-hostel-validation');
const makeRateHostelValidation = require('./rate-hostel-validation');

const { defaultConstants } = require('../../../shared/constants');

const freeServices = Object.values(defaultConstants.FREESERVICES);
const generalServices = Object.values(defaultConstants.GENERALSERVICES);
const hostelServices = Object.values(defaultConstants.HOSTELSERVICES);
const entertainmentServices = Object.values(
  defaultConstants.ENTERTAINMENTSERVICES
);
const foodServices = Object.values(defaultConstants.FOODSERVICES);
const toiletTypes = Object.values(defaultConstants.TOILET_TYPES);
const roomsTypes = Object.values(defaultConstants.ROOMS_TYPES);
const pricePer = Object.values(defaultConstants.PRICE_PER);
const currencies = Object.values(defaultConstants.CURRENCIES);

module.exports.addHostelValidation = makeAddHostelValidation({
  _,
  Builder,
  ValidatorHelper,
  currencies,
  freeServices,
  generalServices,
  hostelServices,
  entertainmentServices,
  foodServices
});

module.exports.addHostelRoomsValidation = makeAddHostelRoomsValidation({
  _,
  Builder,
  ValidatorHelper,
  ObjectId,
  toiletTypes,
  roomsTypes,
  pricePer
});

module.exports.hideHostelValidation = makeHideHostelValidation({
  _,
  Builder,
  ValidatorHelper,
  ObjectId
});

module.exports.unhideHostelValidation = makeUnhideHostelValidation({
  _,
  Builder,
  ValidatorHelper,
  ObjectId
});

module.exports.deleteHostelValidation = makeDeleteHostelValidation({
  _,
  Builder,
  ValidatorHelper,
  ObjectId
});

module.exports.getHostels = makeGetHostelsValidation({
  _,
  Builder,
  ValidatorHelper,
  ObjectId,
  roomsTypes,
  freeServices,
  generalServices,
  hostelServices,
  entertainmentServices,
  foodServices
});

module.exports.editHostel = makeEditHostelValidation({
  _,
  Builder,
  ValidatorHelper,
  ObjectId
});

module.exports.editHostelAvailability = makeEditHostelAvailabilityValidation({
  _,
  Builder,
  ValidatorHelper,
  ObjectId
});

module.exports.getHostel = makeGetHostelValidation({
  _,
  Builder,
  ValidatorHelper,
  ObjectId
});

module.exports.rateHostel = makeRateHostelValidation({
  _,
  Builder,
  ValidatorHelper,
  ObjectId
});
