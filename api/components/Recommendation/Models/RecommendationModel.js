const recommendationSchema = require('../Schema');
const _GenericModel = require('../../shared/models/GenericModel');

module.exports = ({ GenericModel = _GenericModel }) => {
  class RecommendationModel extends GenericModel {
    async checkAddingNewRecommendation(recommendationId, comingOne) {
      const result = await this.getOne({
        query: {
          recommendation: recommendationId,
          from: { $lte: comingOne.from },
          to: { $gte: comingOne.to }
        }
      });
      if (result.length) {
        return false;
      }
      return true;
    }

    async getRecommendations(
      params = {
        query: {},
        select: '',
        sort: { _id: 1 },
        skip: 0,
        limit: 10000000000,
        populate: []
      }
    ) {
      const { limit, query, select, sort, populate } = params;
      const response = await this.DbAccess.paginate(query, {
        select,
        sort,
        limit,
        populate
      });

      return {
        hasNext: response.hasNextPage,
        recommendations: response.docs,
        total: response.totalDocs
      };
    }

    async setRecommendationEditStatus({ recommendationId, isEditing }) {
      // eslint-disable-next-line no-param-reassign
      const update = { isEditing };

      return this.updateOneById({ id: recommendationId, update });
    }
  }
  return new RecommendationModel(recommendationSchema);
};
