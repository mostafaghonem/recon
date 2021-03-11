const makeClearanceScheme = require('./ClearanceSchema');
const { defaultConstants } = require('../../../shared/constants');

const clearanceStatuses = defaultConstants.CLEARANCE_STATUSES;
const soldierStatuses = defaultConstants.SOLDIER_STATUSES;

module.exports = makeClearanceScheme({
  clearanceStatuses,
  soldierStatuses
});
