const unitReservationSchema = require('../Schema');
const _GenericModel = require('../../shared/models/GenericModel');
const { UnitReservationState } = require('../../../shared/constants');

module.exports = ({
  GenericModel = _GenericModel,
  ObjectId,
  unitReservationState
}) => {
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
            $in: [UnitReservationState.PAYED, UnitReservationState.RECEIVED]
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
          from: { $lte: +start }
        }
      });
    }

    async gettingRequestForUnit(unitId) {
      return this.getAggregate({
        arrayOfFilter: [
          {
            $match: { unit: ObjectId(unitId), state: unitReservationState.SEND }
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
  }
  return new UserModel(unitReservationSchema);
};
