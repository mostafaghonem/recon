const makeDivisionScheme = require('./DivisionSchema');
const { defaultConstants } = require('../../../shared/constants');

const requestStatus = Object.values(defaultConstants.REQUEST_STATUS);
const pendingStatus = require('../../../shared/constants/defaults')
  .REQUEST_STATUS;

module.exports = makeDivisionScheme({
  requestStatus,
  pendingStatus: pendingStatus.PENDING
});
