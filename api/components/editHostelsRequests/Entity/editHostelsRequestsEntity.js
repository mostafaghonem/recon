// TODO: should be injected only
const mongoose = require('mongoose');

const __ObjectId = mongoose.Types.ObjectId;

// this require only for auto-complete
const Model = require('../models');

// Inject dependency !no-requires
const buildEditHostelsRequestsEntity = (
  obj = {
    ObjectId: __ObjectId
  }
) => {
  // eslint-disable-next-line no-unused-vars
  const { ObjectId } = obj;
  class EditHostelsRequestsEntity {
    static async loadEntityFromDbById(id) {
      const exists = await Model.getOneById({ id });
      if (exists) return new EditHostelsRequestsEntity(exists);
      return undefined;
    }

    static async loadEntityFromDbByUserId(facebookId) {
      const exists = await Model.getOne({ query: { facebookId } });
      if (exists) return new EditHostelsRequestsEntity(exists);
      return undefined;
    }

    constructor(
      data = {
        userId: String,
        hostelId: String,
        status: String,
        hostel: Object
      }
    ) {
      this.id = data.id || data._id || new ObjectId();
      this.userId = data.userId || new ObjectId();
      this.hostelId = data.hostelId || '';
      this.status = data.status || 'pending';
      this.hostel = data.hostel || {};
      this.createdAt = data.createdAt || new Date();
      this.isArchived = data.isArchived || false;
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
        status: this.status,
        hostel: this.hostel,
        createdAt: this.createdAt,
        isArchived: this.isArchived
      };
    }

    // ! need to be private
    mapToDb() {
      return {
        id: this.id,
        userId: this.userId,
        hostelId: this.hostelId,
        status: this.status,
        hostel: this.hostel,
        createdAt: this.createdAt,
        isArchived: this.isArchived
      };
    }
  }

  return EditHostelsRequestsEntity;
};

module.exports = buildEditHostelsRequestsEntity;
