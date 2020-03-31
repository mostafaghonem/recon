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

    async getMyUnits(userId, lastId, limit, rest = {}) {
      const query = {
        userId,
        _id: {
          $gt: lastId
        },
        ...rest,
        isArchived: false
      };

      const select =
        'type image gallery dailyOrMonthly pricePerPerson status note rates totalRate totalUsersRated address totalRate totalUsersRated totalOnlineBooking totalRevenue numberOfPeople numberOfRooms availableCountNow hasFurniture rentersType isFull';
      const sort = { createdAt: -1 };
      const response = await this.DbAccess.paginate(query, {
        select,
        sort,
        limit
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
  }
  return new UnitModel(unitSchema);
};
