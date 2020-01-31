const makeUserScheme = require('./indentityRequestsScheme');
const { defaultConstants } = require('../../../shared/constants');

const requestStatus = Object.values(defaultConstants.REQUEST_STATUS);

module.exports = makeUserScheme({ requestStatus });
