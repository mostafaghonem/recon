// TODO: should be injected only
const mongoose = require('mongoose');

const __ObjectId = mongoose.Types.ObjectId;

// this require only for auto-complete
const Model = require('../models/UserFavoriteUnitsIndex');

// Inject dependency !no-requires
const buildUserFavoriteUnitsEntity = (
  obj = {
    ObjectId: __ObjectId
  }
) => {
  // eslint-disable-next-line no-unused-vars
  const { ObjectId } = obj;
  class UserFavoriteUnitsEntity {
    static async loadEntityFromDbById(id) {
      const exists = await Model.getOneById({ id });
      if (exists) return new UserFavoriteUnitsEntity(exists);
      return undefined;
    }

    constructor(
      data = {
        userId: String,
        unitId: String,
        favorite: Boolean
      }
    ) {
      this.id = data.id || data._id || new ObjectId();
      this.userId = data.userId || '';
      this.unitId = data.unitId || '';
      this.favorite = data.favorite || false;
    }

    async save() {
      await Model.upsertOneById({
        id: this.id,
        update: this.mapToDb()
      });
    }

    // used by other services
    toJson() {
      return {
        id: this.id,
        userId: this.userId,
        unitId: this.unitId,
        favorite: this.favorite
      };
    }

    // ! need to be private
    mapToDb() {
      return {
        userId: this.userId,
        unitId: this.unitId,
        favorite: this.favorite
      };
    }
  }

  return UserFavoriteUnitsEntity;
};

module.exports = buildUserFavoriteUnitsEntity;
