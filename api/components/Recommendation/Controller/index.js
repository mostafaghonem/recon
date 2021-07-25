const { defaultConstants } = require('../../../shared/constants');

const pagination = Object.freeze(defaultConstants.PAGINATION);

const makeAddRecommendationCtrl = require('./add-recommendation');
const makeDeleteRecommendationCtrl = require('./delete-recommendation');
const makeGetRecommendationsCtrl = require('./get-recommendations');
const makeHideRecommendationCtrl = require('./hide-recommendation');
const makeUnhideRecommendationCtrl = require('./unhide-recommendation');
const makeEditRecommendationCtrl = require('./edit-recommendation');
const makeGetRecommendation = require('./get-recommendation');
const makeIsDuplicate = require('./is-duplicate');
// ->
const addRecommendation = makeAddRecommendationCtrl({});
const deleteRecommendation = makeDeleteRecommendationCtrl({});
const getRecommendations = makeGetRecommendationsCtrl({ pagination });
const hideRecommendation = makeHideRecommendationCtrl({});
const unhideRecommendation = makeUnhideRecommendationCtrl({});
const editRecommendation = makeEditRecommendationCtrl({});
const getRecommendation = makeGetRecommendation({});

const isDuplicate = makeIsDuplicate({});
const recommendationsCtrl = Object.freeze({
  addRecommendation,
  deleteRecommendation,
  hideRecommendation,
  unhideRecommendation,
  editRecommendation,
  getRecommendation,
  getRecommendations,
  isDuplicate
});

module.exports = recommendationsCtrl;
