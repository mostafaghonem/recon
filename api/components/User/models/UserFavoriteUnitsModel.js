const scheme = require('../scheme/UserFavoriteUnits');

// ! should not require anything else than scheme
const _GenericModel = require('../../shared/models/GenericModel');

module.exports = ({ GenericModel = _GenericModel }) => {
  class UserFavoriteUnitsModel extends GenericModel {
    getUnitsWithIds(userId, unitsIds) {
      return this.getMany({
        query: { userId, unitId: { $in: unitsIds } },
        populate: { path: 'unitId', match: { isArchived: false } }
      });
    }

    async getFavouriteUnits(userId, limit, rest = {}, sortObj = {}) {
      const select = '';
      const query = {
        userId,
        ...rest
      };
      const populate = [
        {
          path: 'unitId',
          match: { isArchived: false }
        }
      ];
      const sort = sortObj || { updatedAt: -1 };
      const response = await this.DbAccess.paginate(query, {
        select,
        sort,
        limit,
        populate
      });

      return {
        hasNext: response.hasNextPage,
        data: response.docs,
        total: response.totalDocs
      };
    }
  }
  return new UserFavoriteUnitsModel(scheme);
};
