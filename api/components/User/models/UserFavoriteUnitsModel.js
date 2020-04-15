const scheme = require('../scheme/UserFavoriteUnits');

// ! should not require anything else than scheme
const _GenericModel = require('../../shared/models/GenericModel');

module.exports = ({ GenericModel = _GenericModel }) => {
  class UserFavoriteUnitsModel extends GenericModel {
    getUnitsWithIds(userId, unitsIds, options = {}) {
      const query = { userId, unitId: { $in: unitsIds } };
      const populate = { path: 'unitId', match: { isArchived: false } };
      const params = { query };

      if (options.populate) {
        params.populate = populate;
      }

      if (options.favorite) {
        params.query.favorite = true;
      }

      return this.getMany(params);
    }

    async getFavouriteUnits(
      userId,
      limit,
      rest = {},
      sortObj = {},
      objectRest = {}
    ) {
      const select = '';
      const query = {
        userId,
        favorite: true,
        ...rest
      };
      const populate = [
        {
          path: 'unitId',
          match: { isArchived: false, isHidden: false, ...objectRest }
        }
      ];
      const sort = sortObj.sort || { updatedAt: -1 };
      const response = await this.DbAccess.paginate(query, {
        select,
        sort,
        limit,
        populate
      });

      return {
        hasNext: response.hasNextPage,
        data: response.docs.filter(o => o.unitId),
        total: response.totalDocs
      };
    }
  }
  return new UserFavoriteUnitsModel(scheme);
};
