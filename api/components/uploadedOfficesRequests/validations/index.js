const { Builder, ValidatorHelper } = require('validation-helpers');
const _ = require('lodash');
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;

const makeGetUploadedHostelsRequests = require('./get-uploaded-offices-requests');
const makeUpdateUploadedHostelsRequests = require('./update-uploaded-offices-request');
const { defaultConstants } = require('../../../shared/constants');

const requestStatus = Object.values(defaultConstants.REQUEST_STATUS);
const requestResponse = Object.values(defaultConstants.REQUEST_RESPONSE);
const { REQUEST_RESPONSE } = require('../../../shared/constants/defaults');

module.exports.getUploadedHostelsRequests = makeGetUploadedHostelsRequests({
  _,
  Builder,
  ValidatorHelper,
  ObjectId,
  requestStatus
});

module.exports.updateUploadedHostelRequest = makeUpdateUploadedHostelsRequests({
  _,
  Builder,
  ValidatorHelper,
  ObjectId,
  requestResponse,
  reject: REQUEST_RESPONSE.REJECTED
});
