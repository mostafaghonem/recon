// TODO: should be injected only
const mongoose = require('mongoose');

const __ObjectId = mongoose.Types.ObjectId;

// this require only for auto-complete
const Model = require('../models/UserFavoriteHostelsIndex');

// Inject dependency !no-requires
const buildUserFavoriteHostelsEntity = (
  obj = {
    ObjectId: __ObjectId
  }
) => {
  // eslint-disable-next-line no-unused-vars
  const { ObjectId } = obj;
  class UserFavoriteHostelsEntity {
    static async loadEntityFromDbById(id) {
      const exists = await Model.getOneById({ id });
      if (exists) return new UserFavoriteHostelsEntity(exists);
      return undefined;
    }

    constructor(
      data = {
        userId: String,
        hostelId: String,
        favorite: Boolean
      }
    ) {
      this.id = data.id || data._id || new ObjectId();
      this.userId = data.userId || '';
      this.hostelId = data.hostelId || '';
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
        hostelId: this.hostelId,
        favorite: this.favorite
      };
    }

    // ! need to be private
    mapToDb() {
      return {
        userId: this.userId,
        hostelId: this.hostelId,
        favorite: this.favorite
      };
    }
  }

  return UserFavoriteHostelsEntity;
};

module.exports = buildUserFavoriteHostelsEntity;
