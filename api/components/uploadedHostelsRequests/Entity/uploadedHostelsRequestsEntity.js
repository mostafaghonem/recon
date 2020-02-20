// TODO: should be injected only
const mongoose = require('mongoose');

const __ObjectId = mongoose.Types.ObjectId;

// this require only for auto-complete
const Model = require('../models');

// Inject dependency !no-requires
const buildUploadedHostelsRequestsEntity = (
  obj = {
    ObjectId: __ObjectId
  }
) => {
  // eslint-disable-next-line no-unused-vars
  const { ObjectId } = obj;
  class UploadedHostelsRequestsEntity {
    static async loadEntityFromDbById(id) {
      const exists = await Model.getOneById({ id });
      if (exists) return new UploadedHostelsRequestsEntity(exists);
      return undefined;
    }

    static async loadEntityFromDbByUserId(facebookId) {
      const exists = await Model.getOne({ query: { facebookId } });
      if (exists) return new UploadedHostelsRequestsEntity(exists);
      return undefined;
    }

    constructor(
      data = {
        userId: String,
        hostelId: String,
        status: String
      }
    ) {
      this.id = data.id || data._id || new ObjectId();
      this.userId = data.userId || new ObjectId();
      this.hostelId = data.hostelId || '';
      this.status = data.status || 'pending';
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
        createdAt: this.createdAt,
        isArchived: this.isArchived
      };
    }
  }

  return UploadedHostelsRequestsEntity;
};

module.exports = buildUploadedHostelsRequestsEntity;
