const { defaultConstants } = require('../../../shared/constants');

const pagination = Object.freeze(defaultConstants.PAGINATION);

const makeGetEditOfficesRequests = require('./get-edit-office-requests');
const makeUpdateEditOfficeRequest = require('./update-edit-office-request');

const getEditOfficesRequests = makeGetEditOfficesRequests({
  pagination
});
const updateEditOfficeRequest = makeUpdateEditOfficeRequest({});

const editOfficesRequestsCtrl = Object.freeze({
  getEditOfficesRequests,
  updateEditOfficeRequest
});

module.exports = editOfficesRequestsCtrl;
