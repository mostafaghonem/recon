const makeEditOfficesRequestsScheme = require('./editOfficesRequestsScheme');
const { defaultConstants } = require('../../../shared/constants');

const requestStatus = Object.values(defaultConstants.REQUEST_STATUS);

module.exports = makeEditOfficesRequestsScheme({ requestStatus });
