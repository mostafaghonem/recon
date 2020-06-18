const scheme = require('../scheme/UserFavoriteOffices');

// ! should not require anything else than scheme
const _GenericModel = require('../../shared/models/GenericModel');

module.exports = ({ GenericModel = _GenericModel }) => {
  class UserFavoriteOfficesModel extends GenericModel {
    getOfficesWithIds(userId, officesIds, options = {}) {
      const query = { userId, officeId: { $in: officesIds } };
      const populate = { path: 'officeId', match: { isArchived: false } };
      const params = { query };

      if (options.populate) {
        params.populate = populate;
      }

      if (options.favorite) {
        params.query.favorite = true;
      }

      return this.getMany(params);
    }

    async getFavouriteOffices(
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
          path: 'officeId',
          select: 'name image rate totalUsersRated rooms address.government',
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
        data: response.docs,
        total: response.totalDocs
      };
    }
  }
  return new UserFavoriteOfficesModel(scheme);
};