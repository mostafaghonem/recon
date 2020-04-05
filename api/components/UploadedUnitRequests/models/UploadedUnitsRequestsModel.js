const scheme = require('../scheme');

// ! should not require anything else than scheme
const _GenericModel = require('../../shared/models/GenericModel');

module.exports = ({ GenericModel = _GenericModel }) => {
  class UploadedUnitsRequestsModel extends GenericModel {
    checkExistenceBy(data = { _id: String }) {
      return this.exists({ filter: data });
    }

    async getRequests(
      params = {
        query: {},
        select: '',
        sort: { updatedAt: -1 },
        limit: 10000000000,
        populate: []
      }
    ) {
      const response = await this.DbAccess.paginate(params.query, {
        select: params.select,
        sort: params.sort,
        limit: params.limit,
        populate: params.populate
      });
      // .populate(params.populate)
      // .populate(params.anotherPopulate);

      return {
        hasNext: response.hasNextPage,
        requests: response.docs,
        total: response.totalDocs
      };
    }
  }
  return new UploadedUnitsRequestsModel(scheme);
};
