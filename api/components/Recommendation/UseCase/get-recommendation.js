/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({
  moment,
  ApplicationError,
  getRecommendationsFavorability,
  GetRecommendationsAvailbility,
  accepted
}) => async ({ recommendationId, userId }) => {
  const query = { _id: recommendationId, isArchived: false };
  const select = '';
  const checkExistence = await model.getOne({ query, select });
  if (!checkExistence) {
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا التوصية', 403);
  }

  checkExistence.similarRecommendations = [];

  return checkExistence;
};
