const clearanceSchema = require('../Schema');
const _GenericModel = require('../../shared/models/GenericModel');

module.exports = ({ GenericModel = _GenericModel }) => {
  class ClearanceModel extends GenericModel {
    async checkAddingNewClearance(clearanceId, comingOne) {
      const result = await this.getOne({
        query: {
          clearance: clearanceId,
          from: { $lte: comingOne.from },
          to: { $gte: comingOne.to }
        }
      });
      if (result.length) {
        return false;
      }
      return true;
    }

    async getClearances(
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
        clearances: response.docs,
        total: response.totalDocs
      };
    }

    async setClearanceEditStatus({ clearanceId, isEditing }) {
      // eslint-disable-next-line no-param-reassign
      const update = { isEditing };

      return this.updateOneById({ id: clearanceId, update });
    }
  }
  return new ClearanceModel(clearanceSchema);
};
