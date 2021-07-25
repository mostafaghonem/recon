/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case
 *
 *
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */
const logger = require('../../../startup/logger');
// TODO need to remove it from here and find a solution to put it in index.js
const { ApplicationError } = require('../../../shared/errors');

const makeGetRecommendationById = require('./get-recommendation-by-id');
const makeGetRecommendationsByIds = require('./get-recommendations-by-ids');
const makeChangeRecommendationUnit = require('./change-recommendation-unit');
const makeGetRecommendationByUnitId = require('./get-recommendations-by-unit-id');

const getRecommendationById = makeGetRecommendationById({
  ApplicationError,
  logger
});

const getRecommendationsByIds = makeGetRecommendationsByIds({
  ApplicationError,
  logger
});

const changeRecommendationUnit = makeChangeRecommendationUnit({
  ApplicationError,
  logger
});

const getRecommendationsByUnitId = makeGetRecommendationByUnitId({});

const RecommendationExternalService = Object.freeze({
  getRecommendationById,
  getRecommendationsByIds,
  getRecommendationsByUnitId,
  changeRecommendationUnit
});

module.exports = RecommendationExternalService;
