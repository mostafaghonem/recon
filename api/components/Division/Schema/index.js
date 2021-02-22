const makeDivisionScheme = require('./DivisionSchema');
const { defaultConstants } = require('../../../shared/constants');

const armyList = defaultConstants.ARMY_LIST;
const forcesList = defaultConstants.FORCES_LIST;
const divisionTypes = Object.values(defaultConstants.DIVISION_TYPES);

const requestStatus = Object.values(defaultConstants.REQUEST_STATUS);
const pendingStatus = require('../../../shared/constants/defaults')
  .REQUEST_STATUS;

module.exports = makeDivisionScheme({
  requestStatus,
  armyList,
  forcesList,
  divisionTypes,
  pendingStatus: pendingStatus.PENDING
});
