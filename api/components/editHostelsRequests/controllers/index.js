const { defaultConstants } = require('../../../shared/constants');

const pagination = Object.freeze(defaultConstants.PAGINATION);

const makeGetEditHostelsRequests = require('./get-edit-hostels-requests');
const makeUpdateEditHostelRequest = require('./update-edit-hostel-request');

const getEditHostelsRequests = makeGetEditHostelsRequests({
  pagination
});
const updateEditHostelRequest = makeUpdateEditHostelRequest({});

const editHostelsRequestsCtrl = Object.freeze({
  getEditHostelsRequests,
  updateEditHostelRequest
});

module.exports = editHostelsRequestsCtrl;
