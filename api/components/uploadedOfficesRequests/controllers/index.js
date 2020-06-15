const { defaultConstants } = require('../../../shared/constants');

const pagination = Object.freeze(defaultConstants.PAGINATION);

const makeGetUploadedOfficesRequests = require('./get-uploaded-offices-requests');
const makeUpdateUploadedOfficeRequest = require('./update-uploaded-offices-request');

const getUploadedOfficesRequests = makeGetUploadedOfficesRequests({
  pagination
});
const updateUploadedOfficeRequest = makeUpdateUploadedOfficeRequest({});

const uploadedOfficesRequestsCtrl = Object.freeze({
  getUploadedOfficesRequests,
  updateUploadedOfficeRequest
});

module.exports = uploadedOfficesRequestsCtrl;
