const mongoose = require('mongoose');
const scheme = require('../scheme');

const { ObjectId } = mongoose.Types;

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

    async getMyRequests(userId, limit, rest = {}, sortObj = {}) {
      let $paginate;
      if (rest.updatedAt) {
        $paginate = {
          $match: sortObj.query[1] || sortObj.query
        };
        // eslint-disable-next-line no-param-reassign
        delete rest.updatedAt;
      }

      if (rest.status === 'accepted') {
        delete rest.status;
      }

      const $match = {
        $match: {
          userId: ObjectId(userId),
          status: {
            $ne: 'accepted'
          },
          ...rest
        }
      };

      const sort = sortObj.sort || { updatedAt: -1 };
      const $sort = {
        $sort: sort
      };
      const $group = {
        $group: {
          _id: '$unitId',
          type: { $first: '$type' },
          note: { $first: '$note' },
          updatedAt: { $first: '$updatedAt' },
          status: { $first: '$status' },
          update: { $first: '$update' },
          requestId: { $first: '$_id' }
        }
      };

      const $limit = {
        $limit: limit
      };
      const pipeline = [$match, $sort, $group, $sort];
      if ($paginate) {
        pipeline.push($paginate);
      }

      if ($limit) {
        pipeline.push($limit);
      }

      const response = await this.DbAccess.aggregate(pipeline);

      return {
        hasNext: !!response.length,
        requests: response
      };
    }
  }
  return new UploadedUnitsRequestsModel(scheme);
};
