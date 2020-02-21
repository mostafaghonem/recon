const makeIdentityRequestsScheme = require('./identityRequestsScheme');
const { defaultConstants } = require('../../../shared/constants');

const requestStatus = Object.values(defaultConstants.REQUEST_STATUS);

module.exports = makeIdentityRequestsScheme({ requestStatus });
