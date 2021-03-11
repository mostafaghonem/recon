const makeStaffScheme = require('./StaffSchema');
const { defaultConstants, locations } = require('../../../shared/constants');

const armyList = defaultConstants.ARMY_LIST;
const forcesList = defaultConstants.FORCES_LIST;
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
  influenceSchema
} = require('../../../shared/constants/schemas');

module.exports = makeStaffScheme({
  divSchema,
  influenceSchema,
  requestStatus,
  armyList,
  forcesList,
  recruitmentLevels,
  educationRanks,
  recruitmentAreas,
  governates,
  situations,
  treatments,
  ranks,
  pendingStatus: pendingStatus.PENDING
});
