const { defaultConstants } = require('../../../shared/constants');

const pagination = Object.freeze(defaultConstants.PAGINATION);

const makeAddIdentityRequests = require('./add-identity-requests');
const makeGetIdentityRequests = require('./get-identity-requests');
const makeUpdateIdentityRequests = require('./update-identity-requests');

const addIdentityRequests = makeAddIdentityRequests({});
const getIdentityRequests = makeGetIdentityRequests({ pagination });
const updateIdentityRequests = makeUpdateIdentityRequests({});

const userCtrl = Object.freeze({
  addIdentityRequests,
  getIdentityRequests,
  updateIdentityRequests
});

module.exports = userCtrl;
