const makeRecommendationScheme = require('./RecommendationSchema');
const { defaultConstants, locations } = require('../../../shared/constants');

const recruitmentAreas = locations.recruitmentAreas;
const recommendationsType = defaultConstants.RECOMMENDATIONS_TYPES || [];

const requestStatus = Object.values(defaultConstants.REQUEST_STATUS);
const pendingStatus = require('../../../shared/constants/defaults')
  .REQUEST_STATUS;

module.exports = makeRecommendationScheme({
  requestStatus,
  recommendationsType,
  recruitmentAreas,
  pendingStatus: pendingStatus.PENDING
});
