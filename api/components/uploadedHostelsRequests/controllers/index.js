const { defaultConstants } = require('../../../shared/constants');

const pagination = Object.freeze(defaultConstants.PAGINATION);

const makeGetUploadedHostelsRequests = require('./get-uploaded-hostels-requests');
const makeUpdateUploadedHostelRequest = require('./update-uploaded-hostel-request');

const getUploadedHostelsRequests = makeGetUploadedHostelsRequests({
  pagination
});
const updateUploadedHostelRequest = makeUpdateUploadedHostelRequest({});

const uploadedHostelsRequestsCtrl = Object.freeze({
  getUploadedHostelsRequests,
  updateUploadedHostelRequest
});

module.exports = uploadedHostelsRequestsCtrl;
