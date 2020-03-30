const { defaultConstants } = require('../../../shared/constants');
const makeUploadedUnitsRequestsScheme = require('./UploadedUnitsRequestsScheme');
const unitSchema = require('./../../Unit/Schema');

const requestStatus = Object.values(defaultConstants.REQUEST_STATUS);
const requestTypes = Object.freeze(defaultConstants.REQUEST_TYPES);

module.exports = makeUploadedUnitsRequestsScheme({
  requestStatus,
  requestTypes,
  unitSchema
});
