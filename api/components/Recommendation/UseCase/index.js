/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case here in index and inject it to the method wrapper
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */

const _ = require('lodash');
const moment = require('moment');
const logger = require('../../../startup/logger');
const { ApplicationError } = require('../../../shared/errors');
const {
  REQUEST_RESPONSE,
  EVENTS_TYPES,
  REQUEST_STATUS
} = require('../../../shared/constants/defaults');
const {
  GetSortObj,
  GetDateSplitObj,
  GetRecruitmentAreaFromAddress,
  CalculateReleaseDate
} = require('../../../shared/constants/methods');

const makeAddRecommendation = require('./add-recommendation');
const makeDeleteRecommendation = require('./delete-recommendation');
const makeGetRecommendation = require('./get-recommendation');
const makeGetRecommendations = require('./get-recommendations');
const makeHideRecommendation = require('./hide-recommendation');
const makeUnhideRecommendation = require('./unhide-recommendation');
const makeEditRecommendation = require('./edit-recommendation');
const makeIsDuplicate = require('./is-duplicate');

const addRecommendation = makeAddRecommendation({
  ApplicationError,
  logger,
  GetRecruitmentAreaFromAddress,
  CalculateReleaseDate,
  events: EVENTS_TYPES
});

const deleteRecommendation = makeDeleteRecommendation({
  ApplicationError,
  logger
});

const getRecommendation = makeGetRecommendation({
  moment,
  ApplicationError,
  logger,
  accepted: REQUEST_RESPONSE.ACCEPTED
});

const getRecommendations = makeGetRecommendations({
  _,
  moment,
  ApplicationError,
  logger,
  accepted: REQUEST_RESPONSE.ACCEPTED,
  GetSortObj,
  GetDateSplitObj
});

const hideRecommendation = makeHideRecommendation({
  ApplicationError,
  logger
});

const unhideRecommendation = makeUnhideRecommendation({
  ApplicationError,
  logger
});

const editRecommendation = makeEditRecommendation({
  ApplicationError,
  logger,
  events: EVENTS_TYPES,
  pending: REQUEST_STATUS.PENDING
});

const isDuplicate = makeIsDuplicate({
  ApplicationError,
  logger
});
const recommendationsUseCases = {
  addRecommendation,
  deleteRecommendation,
  hideRecommendation,
  unhideRecommendation,
  editRecommendation,
  getRecommendation,
  getRecommendations,
  isDuplicate
};

module.exports = recommendationsUseCases;
