const influenceSchema = require('../Schema');
const _GenericModel = require('../../shared/models/GenericModel');

module.exports = ({ GenericModel = _GenericModel }) => {
  class InfluenceModel extends GenericModel {
    async checkAddingNewInfluence(influenceId, comingOne) {
      const result = await this.getOne({
        query: {
          influence: influenceId,
          from: { $lte: comingOne.from },
          to: { $gte: comingOne.to }
        }
      });
      if (result.length) {
        return false;
      }
      return true;
    }

    async getInfluences(
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
        influences: response.docs,
        total: response.totalDocs
      };
    }

    async setInfluenceEditStatus({ influenceId, isEditing }) {
      // eslint-disable-next-line no-param-reassign
      const update = { isEditing };

      return this.updateOneById({ id: influenceId, update });
    }
  }
  return new InfluenceModel(influenceSchema);
};
