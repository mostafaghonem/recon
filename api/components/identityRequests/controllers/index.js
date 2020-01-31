const { defaultConstants } = require('../../../shared/constants');

const pagination = Object.values(defaultConstants.PAGINATION);

const makeAddIndentityRequests = require('./add-indentity-requests');
const makeGetIndentityRequests = require('./get-indentity-requests');
const makeUpdateIndentityRequests = require('./update-indentity-requests');

const addIndentityRequests = makeAddIndentityRequests({});
const getIndentityRequests = makeGetIndentityRequests({ pagination });
const updateIndentityRequests = makeUpdateIndentityRequests({});

const userCtrl = Object.freeze({
  addIndentityRequests,
  getIndentityRequests,
  updateIndentityRequests
});

module.exports = userCtrl;
