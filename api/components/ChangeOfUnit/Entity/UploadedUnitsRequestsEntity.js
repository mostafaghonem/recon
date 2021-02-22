// TODO: should be injected only
const mongoose = require('mongoose');

const __ObjectId = mongoose.Types.ObjectId;

// this require only for auto-complete
const Model = require('../models');

// Inject dependency !no-requires
const buildChangeOfUnitEntity = (
  obj = {
    ObjectId: __ObjectId
  }
) => {
  // eslint-disable-next-line no-unused-vars
  const { ObjectId } = obj;
  class ChangeOfUnitEntity {
    static async loadEntityFromDbById(id) {
      const exists = await Model.getOneById({ id });
      if (exists) return new ChangeOfUnitEntity(exists);
      return undefined;
    }

    static async loadEntityFromDbByUserId(facebookId) {
      const exists = await Model.getOne({ query: { facebookId } });
      if (exists) return new ChangeOfUnitEntity(exists);
      return undefined;
    }

    constructor(
      data = {
        userId: String,
        unitId: String,
        status: String,
        update: Object,
        type: String,
        processed: Boolean
      }
    ) {
      this.id = data.id || data._id || new ObjectId();
      this.userId = data.userId || new ObjectId();
      this.unitId = data.unitId || '';
      this.status = data.status || 'pending';
      this.update = data.update || undefined;
      this.type = data.type || 'add';
      this.processed = data.processed || false;
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
        unitId: this.unitId,
        status: this.status,
        update: this.update,
        type: this.type,
        processed: this.processed,
        createdAt: this.createdAt,
        isArchived: this.isArchived
      };
    }

    // ! need to be private
    mapToDb() {
      return {
        id: this.id,
        userId: this.userId,
        unitId: this.unitId,
        status: this.status,
        update: this.update,
        type: this.type,
        processed: this.processed,
        createdAt: this.createdAt,
        isArchived: this.isArchived
      };
    }
  }

  return ChangeOfUnitEntity;
};

module.exports = buildChangeOfUnitEntity;
