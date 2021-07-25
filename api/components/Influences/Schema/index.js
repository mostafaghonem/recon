/* eslint-disable import/no-dynamic-require */
const makeInfluenceScheme = require('./InfluenceSchema');
const { defaultConstants, locations } = require('../../../shared/constants');

const influenceTypes = defaultConstants.INFLUENCES_TYPES;
const influenceCategories = defaultConstants.INFLUENCES_CATEGORIES;
const governates = locations.governates;

const requestStatus = Object.values(defaultConstants.REQUEST_STATUS);
const ranks = defaultConstants.RANKS;
const pendingStatus = require('../../../shared/constants/defaults')
  .REQUEST_STATUS;

const embeddedSchemas = {};
influenceTypes.map(o => {
  const filePath = `./types/${o.value}Schema`;
  // eslint-disable-next-line global-require
  embeddedSchemas[o.value] = require(filePath)({ ranks, governates });
});

module.exports = makeInfluenceScheme({
  requestStatus,
  ranks,
  influenceCategories,
  influenceTypes,
  embeddedSchemas,
  pendingStatus: pendingStatus.PENDING
});
