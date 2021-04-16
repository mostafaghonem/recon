const makeStaffScheme = require('./StaffSchema');
const { defaultConstants, locations } = require('../../../shared/constants');

const armyList = defaultConstants.ARMY_LIST;
const forcesList = defaultConstants.FORCES_LIST;
const ranks = defaultConstants.STAFF_RANKS;
const categoriesList = defaultConstants.STAFF_CATEGORIES;
const medicalSituations = defaultConstants.MEDICAL_SITUATIONS;
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
  ranks,
  requestStatus,
  governates,
  armyList,
  forcesList,
  categoriesList,
  medicalSituations,
  pendingStatus: pendingStatus.PENDING
});
