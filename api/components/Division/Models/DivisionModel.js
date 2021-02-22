const divisionSchema = require('../Schema');
const _GenericModel = require('../../shared/models/GenericModel');

module.exports = ({ GenericModel = _GenericModel }) => {
  class DivisionModel extends GenericModel {
    async checkAddingNewDivision(divisionId, comingOne) {
      const result = await this.getOne({
        query: {
          division: divisionId,
          from: { $lte: comingOne.from },
          to: { $gte: comingOne.to }
        }
      });
      if (result.length) {
        return false;
      }
      return true;
    }

    async getDivisions(
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
        divisions: response.docs,
        total: response.totalDocs
      };
    }

    async setDivisionEditStatus({ divisionId, isEditing }) {
      // eslint-disable-next-line no-param-reassign
      const update = { isEditing };

      return this.updateOneById({ id: divisionId, update });
    }
  }
  return new DivisionModel(divisionSchema);
};
