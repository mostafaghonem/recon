const unitSchema = require('../Schema');
const _GenericModel = require('../../shared/models/GenericModel');

module.exports = ({ GenericModel = _GenericModel }) => {
  class UnitModel extends GenericModel {
    async checkAddingNewUnit(unitId, comingOne) {
      const result = await this.getOne({
        query: {
          unit: unitId,
          from: { $lte: comingOne.from },
          to: { $gte: comingOne.to }
        }
      });
      if (result.length) {
        return false;
      }
      return true;
    }

    async getMyUnits(userId, limit, rest = {}, sortObj = {}) {
      const query = {
        userId,
        ...rest,
        isArchived: false
      };

      const select =
        'type image gallery dailyOrMonthly pricePerPerson status note rates totalRate totalUsersRated address totalRate totalUsersRated totalOnlineBooking totalRevenue numberOfPeople numberOfRooms availableCountNow hasFurniture rentersType isEditing isFull createdAt updatedAt';
      const sort = sortObj || { updatedAt: -1 };
      const response = await this.DbAccess.paginate(query, {
        select,
        sort,
        limit
      });

      return {
        hasNext: response.hasNextPage,
        data: response.docs,
        total: response.totalDocs
      };
    }

    async getUnits(
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
        units: response.docs,
        total: response.totalDocs
      };
    }

    async checkHasNext(query = {}, lastId) {
      // eslint-disable-next-line no-param-reassign
      query._id = {
        $gt: lastId
      };

      const response = await this.getOne({
        query
      });
      return response;
    }

    async setUnitEditStatus({ unitId, isEditing }) {
      // eslint-disable-next-line no-param-reassign
      const update = { isEditing };

      return this.updateOneById({ id: unitId, update });
    }
  }
  return new UnitModel(unitSchema);
};
