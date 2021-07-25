const makeSoldierScheme = require('./SoldierSchema');
const { defaultConstants, locations } = require('../../../shared/constants');

const armyList = defaultConstants.ARMY_LIST;
const forcesList = defaultConstants.FORCES_LIST;
const ethicsDegrees = defaultConstants.ETHICS_DEGREES;
const recruitmentLevels = defaultConstants.RECRUITMENT_LEVELS;
const educationRanks = defaultConstants.EDUCATION_RANKS;
const situations = defaultConstants.SITUATIONS;
const treatments = defaultConstants.TREATMENTS;
const ranks = defaultConstants.RANKS;
const recruitmentAreas = locations.recruitmentAreas;
const governates = locations.governates;
const requestStatus = Object.values(defaultConstants.REQUEST_STATUS);
const pendingStatus = require('../../../shared/constants/defaults')
  .REQUEST_STATUS;

const {
  divSchema,
  clearnceSchema,
  influenceSchema
} = require('../../../shared/constants/schemas');

module.exports = makeSoldierScheme({
  divSchema,
  influenceSchema,
  clearnceSchema,
  requestStatus,
  armyList,
  forcesList,
  ethicsDegrees,
  recruitmentLevels,
  educationRanks,
  recruitmentAreas,
  governates,
  situations,
  treatments,
  ranks,
  pendingStatus: pendingStatus.PENDING
});
