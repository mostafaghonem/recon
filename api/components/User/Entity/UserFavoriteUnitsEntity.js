// TODO: should be injected only
const bcjs = require('bcryptjs');
const mongoose = require('mongoose');
const jsonwebtoken = require('jsonwebtoken');
const Promise = require('bluebird');

const _jwt = Promise.promisifyAll(jsonwebtoken);
const __ObjectId = mongoose.Types.ObjectId;

// this require only for auto-complete
const Model = require('../models');

// Inject dependency !no-requires
const buildUnitEntity = (
  obj = {
    ObjectId: __ObjectId,
    jwt: _jwt
  }
) => {
  // eslint-disable-next-line no-unused-vars
  const { ObjectId, jwt } = obj;
  class UnitEntity {
    static async loadEntityFromDbById(id) {
      const exists = await Model.getOneById({ id });
      if (exists) return new UnitEntity(exists);
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
        unitId: this.v,
        favorite: this.favorite
      };
    }
  }

  return UnitEntity;
};

module.exports = buildUnitEntity;
