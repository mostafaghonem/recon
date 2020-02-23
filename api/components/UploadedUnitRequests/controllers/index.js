const { defaultConstants } = require('../../../shared/constants');

const pagination = Object.values(defaultConstants.PAGINATION);

const makeGetUploadedUnitsRequests = require('./get-uploaded-units-requests');
const makeUpdateUploadedUnitRequest = require('./update-uploaded-unit-request');

const getUploadedUnitsRequests = makeGetUploadedUnitsRequests({
  pagination
});
const updateUploadedUnitRequest = makeUpdateUploadedUnitRequest({});

const UploadedUnitsRequestsCtrl = Object.freeze({
  getUploadedUnitsRequests,
  updateUploadedUnitRequest
});

module.exports = UploadedUnitsRequestsCtrl;
