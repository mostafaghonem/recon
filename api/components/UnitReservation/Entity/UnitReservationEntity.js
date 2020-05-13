const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;
// TODO: should be injected only

// this require only for auto-complete
const Model = require('../Models/index');

// Inject dependency !no-requires
const buildUserEntity = () => {
  class UnitReservation {
    constructor({
      renter = '',
      owner = '',
      unit = '',
      from = '',
      to = '',
      cost = '',
      state = '',
      pending = false,
      _id = ObjectId()
    }) {
      this.pending = pending;
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

      if (exists) return new UnitReservation(exists);
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
    async gettingIntersectAndUpdateState(filter, updateObj) {
      const newFilter = {
        ...{
          _id: { $ne: this.id },
          unit: this.unit,
          from: { $lte: this.to },
          to: { $gte: this.from }
        },
        ...filter
      };
      const ret = await Model.updateManyByFilter({
        filter: newFilter,
        update: updateObj
      });
      return ret;
    }

    async gettingIntersectWithFilter(filter) {
      const newFilter = {
        ...{
          _id: { $ne: this.id },
          unit: this.unit,
          from: { $lte: this.to },
          to: { $gte: this.from }
        },
        ...filter
      };

      let ret = await Model.getMany({
        query: newFilter
      });

      ret = ret.map(request => {
        return new UnitReservation(request);
      });
      return ret;
    }

    async updateState() {
      await Model.updateOneById({
        id: this.id,
        update: this.toJson()
      });
    }

    toJson() {
      return {
        state: this.state,
        pending: this.pending
      };
    }
  }

  return UnitReservation;
};

module.exports = buildUserEntity;
