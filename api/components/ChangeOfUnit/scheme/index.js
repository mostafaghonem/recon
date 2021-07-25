const { defaultConstants } = require('../../../shared/constants');
const { divSchema } = require('../../../shared/constants/schemas');

const makeChangeOfUnitScheme = require('./ChangeOfUnitScheme');

const requestStatus = Object.values(defaultConstants.REQUEST_STATUS);
const requestTypes = Object.freeze(defaultConstants.REQUEST_TYPES);

module.exports = makeChangeOfUnitScheme({
  divSchema,
  requestStatus,
  requestTypes
});
