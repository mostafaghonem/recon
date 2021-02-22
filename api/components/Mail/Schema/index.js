const makeMailScheme = require('./MailSchema');
const { defaultConstants, locations } = require('../../../shared/constants');
const {
  Branches: branchesList
} = require('../../../shared/constants/permissions-ranks');

const armyList = defaultConstants.ARMY_LIST;
const forcesList = defaultConstants.FORCES_LIST;
const recruitmentLevels = defaultConstants.RECRUITMENT_LEVELS;
const educationRanks = defaultConstants.EDUCATION_RANKS;
const situations = defaultConstants.SITUATIONS;
const treatments = defaultConstants.TREATMENTS;
const recruitmentAreas = locations.recruitmentAreas;
const governates = locations.governates;
const requestStatus = Object.values(defaultConstants.REQUEST_STATUS);
const pendingStatus = require('../../../shared/constants/defaults')
  .REQUEST_STATUS;

const { divSchema } = require('../../../shared/constants/schemas');

module.exports = makeMailScheme({
  divSchema,
  requestStatus,
  armyList,
  forcesList,
  recruitmentLevels,
  educationRanks,
  recruitmentAreas,
  governates,
  situations,
  treatments,
  pendingStatus: pendingStatus.PENDING,
  branchesList
});
