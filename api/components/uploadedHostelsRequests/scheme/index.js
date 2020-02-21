const makeUploadedHostelsRequestsScheme = require('./uploadedHostelsRequestsScheme');
const { defaultConstants } = require('../../../shared/constants');

const requestStatus = Object.values(defaultConstants.REQUEST_STATUS);

module.exports = makeUploadedHostelsRequestsScheme({ requestStatus });
