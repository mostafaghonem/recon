const unitReservationSchema = require('../Schema');
const _GenericModel = require('../../shared/models/GenericModel');
const { UnitReservationState } = require('../../../shared/constants');

module.exports = ({ GenericModel = _GenericModel, ObjectId }) => {
  class UserModel extends GenericModel {
    // constructor(DbAccess = scheme) {
    //   super(DbAccess);
    // }
    async checkAddingNewReservation(unitId, comingOne) {
      const result = await this.getOne({
        query: {
          unit: unitId,
          from: { $lte: comingOne.from },
          to: { $gte: comingOne.to },
          state: {
            $in: [UnitReservationState.RECEIVED]
          }
        }
      });
      if (result) {
        return false;
      }
      return true;
    }

    async gettingUnAvailableTime(unitId) {
      const start = new Date();
      start.setHours(0, 0, 0, 0);
      return this.getMany({
        query: {
          unit: unitId,
          from: { $lte: +start },
          state: UnitReservationState.REFUSED
        }
      });
    }

    async gettingRequestForUnit(unitId) {
      return this.getAggregate({
        arrayOfFilter: [
          {
            $match: {
              unit: ObjectId(unitId),
              state: {
                $nin: [
                  UnitReservationState.SEND,
                  UnitReservationState.REFUSED,
                  UnitReservationState.CANCEL
                ]
              }
            }
          },
          {
            $lookup: {
              from: 'users',
              localField: 'renter',
              foreignField: '_id',
              as: 'renter'
            }
          },
          { $unwind: '$renter' },
          {
            $lookup: {
              from: 'units',
              localField: 'unit',
              foreignField: '_id',
              as: 'unit'
            }
          },
          { $unwind: '$unit' }
        ]
      });
    }

    async gettingRequestOfRenter(renterId) {
      return this.getAggregate({
        arrayOfFilter: [
          {
            $match: {
              renter: ObjectId(renterId),
              state: { $nin: [UnitReservationState.CANCEL] }
            }
          },
          {
            $lookup: {
              from: 'users',
              localField: 'owner',
              foreignField: '_id',
              as: 'owner'
            }
          },
          { $unwind: '$owner' },
          {
            $lookup: {
              from: 'units',
              localField: 'unit',
              foreignField: '_id',
              as: 'unit'
            }
          },
          { $unwind: '$unit' }
        ]
      });
    }

    async gettingRequestForAmin(limit, skip, search, states) {
      return this.getAggregate({
        arrayOfFilter: [
          {
            $match: {
              state: { $in: states }
            }
          },

          {
            $lookup: {
              from: 'users',
              localField: 'owner',
              foreignField: '_id',
              as: 'owner'
            }
          },
          { $unwind: '$owner' },
          {
            $lookup: {
              from: 'units',
              localField: 'unit',
              foreignField: '_id',
              as: 'unit'
            }
          },
          { $unwind: '$unit' },
          {
            $lookup: {
              from: 'users',
              localField: 'renter',
              foreignField: '_id',
              as: 'renter'
            }
          },

          {
            $match: { ...search }
          },
          {
            $sort: { updatedAt: -1 }
          },
          { $unwind: '$renter' },
          { $limit: skip + limit },
          { $skip: skip }
        ]
      });
    }
  }
  return new UserModel(unitReservationSchema);
};
