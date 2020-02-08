const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;
// TODO: should be injected only

// this require only for auto-complete
const Model = require('../Models/index');

// Inject dependency !no-requires
const buildUserEntity = () => {
  class UserEntity {
    constructor(
      renter = '',
      owner = '',
      unit = '',
      from = '',
      to = '',
      cost = '',
      state = '',
      _id = ObjectId()
    ) {
      this.id = _id;
      this.renter = renter;
      this.owner = owner;
      this.unit = unit;
      this.from = from;
      this.to = to;
      this.cost = cost;
      this.state = state;
    }

    static async loadEntityFromDbById(id) {
      const exists = await Model.getOneById({ id });
      if (exists) return new UserEntity({ ...exists });
      return undefined;
    }

    static async validReservationOrNot(unitId, from, to) {
      const one = Model.getOne({
        unit: unitId,
        from: { $lte: from },
        to: { $gte: to }
      });
      if (one) {
        return false;
      }
      return true;
    }

    // TODO
    // here you need to adding shared method
    // like:
    // 1 - getting all request intersect with the same request
    async gettingIntersectAndUpdateState(filter, newState) {
      const newFilter = {
        ...filter,
        ...{
          from: { $lte: this.from },
          to: { $gte: this.to }
        }
      };
      Model.updateManyByFilter({
        filter: newFilter,
        update: { state: newState }
      });
    }

    async updateState() {
      Model.updateOneById({ id: this.id, update: this.toJson() });
    }

    toJson() {
      return {
        state: this.state
      };
    }
  }

  return UserEntity;
};

module.exports = buildUserEntity;
