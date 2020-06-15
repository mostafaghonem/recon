const { Builder, ValidatorHelper } = require('validation-helpers');
const _ = require('lodash');
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;

const makeGetEditOfficesRequests = require('./get-edit-office-requests');
const makeUpdateEditOfficesRequests = require('./update-edit-office-request');
const { defaultConstants } = require('../../../shared/constants');

const requestStatus = Object.values(defaultConstants.REQUEST_STATUS);
const requestResponse = Object.values(defaultConstants.REQUEST_RESPONSE);
const { REQUEST_RESPONSE } = require('../../../shared/constants/defaults');

module.exports.getEditOfficesRequests = makeGetEditOfficesRequests({
  _,
  Builder,
  ValidatorHelper,
  ObjectId,
  requestStatus
});

module.exports.updateEditOfficeRequest = makeUpdateEditOfficesRequests({
  _,
  Builder,
  ValidatorHelper,
  ObjectId,
  requestResponse,
  reject: REQUEST_RESPONSE.REJECTED
});
