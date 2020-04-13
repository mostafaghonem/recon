const { Builder, ValidatorHelper } = require('validation-helpers');
const _ = require('lodash');
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;

const makeGetEditedHostelsRequests = require('./get-edit-hostels-requests');
const makeUpdateEditedHostelsRequests = require('./update-edit-hostel-request');
const { defaultConstants } = require('../../../shared/constants');

const requestStatus = Object.values(defaultConstants.REQUEST_STATUS);
const requestResponse = Object.values(defaultConstants.REQUEST_RESPONSE);
const { REQUEST_RESPONSE } = require('../../../shared/constants/defaults');

module.exports.getEditedHostelsRequests = makeGetEditedHostelsRequests({
  _,
  Builder,
  ValidatorHelper,
  ObjectId,
  requestStatus
});

module.exports.updateEditedHostelRequest = makeUpdateEditedHostelsRequests({
  _,
  Builder,
  ValidatorHelper,
  ObjectId,
  requestResponse,
  reject: REQUEST_RESPONSE.REJECTED
});
