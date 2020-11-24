const makeInfluenceScheme = require('./InfluenceSchema');
const { defaultConstants } = require('../../../shared/constants');

const armyList = defaultConstants.ARMY_LIST;
const forcesList = defaultConstants.FORCES_LIST;
const influenceTypes = defaultConstants.Influence_TYPES;

const requestStatus = Object.values(defaultConstants.REQUEST_STATUS);
const pendingStatus = require('../../../shared/constants/defaults')
  .REQUEST_STATUS;

module.exports = makeInfluenceScheme({
  requestStatus,
  armyList,
  forcesList,
  influenceTypes,
  pendingStatus: pendingStatus.PENDING
});
