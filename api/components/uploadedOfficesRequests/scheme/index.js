const makeUploadedOfficesRequestsScheme = require('./uploadedOfficesRequestsScheme');
const { defaultConstants } = require('../../../shared/constants');

const requestStatus = Object.values(defaultConstants.REQUEST_STATUS);

module.exports = makeUploadedOfficesRequestsScheme({ requestStatus });
