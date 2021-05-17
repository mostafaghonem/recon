const makeRecommendationScheme = require('./RecommendationSchema');
const { defaultConstants } = require('../../../shared/constants');

const recommendationsType = defaultConstants.RECOMMENDATIONS_TYPES || [];

const requestStatus = Object.values(defaultConstants.REQUEST_STATUS);
const pendingStatus = require('../../../shared/constants/defaults')
  .REQUEST_STATUS;

module.exports = makeRecommendationScheme({
  requestStatus,
  recommendationsType,
  pendingStatus: pendingStatus.PENDING
});
