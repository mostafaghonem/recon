const scheme = require('../scheme/UserFavoriteHostels');

// ! should not require anything else than scheme
const _GenericModel = require('../../shared/models/GenericModel');

module.exports = ({ GenericModel = _GenericModel }) => {
  class UserFavoriteHostelsModel extends GenericModel {
    getHostelsWithIds(userId, hostelsIds, options = {}) {
      const query = { userId, hostelId: { $in: hostelsIds } };
      const populate = { path: 'hostelId', match: { isArchived: false } };
      const params = { query };

      if (options.populate) {
        params.populate = populate;
      }

      if (options.favorite) {
        params.query.favorite = true;
      }

      return this.getMany(params);
    }

    async getFavouriteHostels(userId, limit, rest = {}, sortObj = {}) {
      const select = '';
      const query = {
        userId,
        favorite: true,
        ...rest
      };
      const populate = [
        {
          path: 'hostelId',
          select: 'name image rate totalUsersRated rooms address.government',
          match: { isArchived: false }
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
        data: response.docs,
        total: response.totalDocs
      };
    }
  }
  return new UserFavoriteHostelsModel(scheme);
};
