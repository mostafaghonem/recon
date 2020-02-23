const makeUploadedUnitsRequestsScheme = require('./UploadedUnitsRequestsScheme');
const { defaultConstants } = require('../../../shared/constants');

const requestStatus = Object.values(defaultConstants.REQUEST_STATUS);

module.exports = makeUploadedUnitsRequestsScheme({ requestStatus });
