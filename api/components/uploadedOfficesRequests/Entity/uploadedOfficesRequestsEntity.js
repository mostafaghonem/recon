// TODO: should be injected only
const mongoose = require('mongoose');

const __ObjectId = mongoose.Types.ObjectId;

// this require only for auto-complete
const Model = require('../models');

// Inject dependency !no-requires
const buildUploadedOfficesRequestsEntity = (
  obj = {
    ObjectId: __ObjectId
  }
) => {
  // eslint-disable-next-line no-unused-vars
  const { ObjectId } = obj;
  class UploadedOfficesRequestsEntity {
    static async loadEntityFromDbById(id) {
      const exists = await Model.getOneById({ id });
      if (exists) return new UploadedOfficesRequestsEntity(exists);
      return undefined;
    }

    static async loadEntityFromDbByUserId(facebookId) {
      const exists = await Model.getOne({ query: { facebookId } });
      if (exists) return new UploadedOfficesRequestsEntity(exists);
      return undefined;
    }

    constructor(
      data = {
        userId: String,
        officeId: String,
        status: String
      }
    ) {
      this.id = data.id || data._id || new ObjectId();
      this.userId = data.userId || new ObjectId();
      this.officeId = data.officeId || '';
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
        officeId: this.officeId,
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
        officeId: this.officeId,
        status: this.status,
        createdAt: this.createdAt,
        isArchived: this.isArchived
      };
    }
  }

  return UploadedOfficesRequestsEntity;
};

module.exports = buildUploadedOfficesRequestsEntity;
