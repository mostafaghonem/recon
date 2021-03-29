const soldierSchema = require('../Schema');
const _GenericModel = require('../../shared/models/GenericModel');

module.exports = ({ GenericModel = _GenericModel }) => {
  class SoldierModel extends GenericModel {
    async checkAddingNewSoldier(soldierId, comingOne) {
      const result = await this.getOne({
        query: {
          soldier: soldierId,
          from: { $lte: comingOne.from },
          to: { $gte: comingOne.to }
        }
      });
      if (result.length) {
        return false;
      }
      return true;
    }

    checkExistenceBy(data = {}) {
      const orOp = Object.keys(data)
        .filter(k => typeof data[k] !== 'undefined')
        .map(k => ({ [k]: data[k] }));

      return this.exists({ filter: { $or: orOp } });
    }

    async getSoldiers(
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
        soldiers: response.docs,
        total: response.totalDocs
      };
    }

    async setSoldierEditStatus({ soldierId, isEditing }) {
      // eslint-disable-next-line no-param-reassign
      const update = { isEditing };

      return this.updateOneById({ id: soldierId, update });
    }
  }
  return new SoldierModel(soldierSchema);
};
