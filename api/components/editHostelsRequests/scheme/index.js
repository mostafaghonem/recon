const makeEditHostelsRequestsScheme = require('./editHostelsRequestsScheme');
const { defaultConstants } = require('../../../shared/constants');

const requestStatus = Object.values(defaultConstants.REQUEST_STATUS);

module.exports = makeEditHostelsRequestsScheme({ requestStatus });
