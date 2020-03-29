// TODO: should be injected only
const bcjs = require('bcryptjs');
const mongoose = require('mongoose');
const jsonwebtoken = require('jsonwebtoken');
const Promise = require('bluebird');

const _jwt = Promise.promisifyAll(jsonwebtoken);
const __ObjectId = mongoose.Types.ObjectId;

const { ApplicationError: AppError } = require('../../../shared/errors');

// this require only for auto-complete
const Model = require('../Models');

// Inject dependency !no-requires
const buildEventEntity = (
  obj = {
    bcrypt: bcjs,
    ApplicationError: AppError,
    ObjectId: __ObjectId,
    jwt: _jwt,
    _
  }
) => {
  // eslint-disable-next-line no-unused-vars
  const { bcrypt, ApplicationError, ObjectId, jwt, _, pendingStatus } = obj;
  class EventEntity {
    static async loadEntityFromDbByTimestamp(timestamp) {
      const exists = await Model.getOne({
        query: { timestamp }
      });
      if (exists) return new EventEntity(exists);
      return undefined;
    }

    constructor(
      data = {
        type: String,
        userId: String,
        username: String,
        message: String,
        objectId: String,
        objectName: String,
        objectType: String,
        timestamp: Number,
        eventCounter: Number,
        targets: [],
        createdAt: Date
      }
    ) {
      this.id = data.id || data._id || new ObjectId();
      this.type = data.type || '';
      this.userId = data.userId || '';
      this.username = data.username || '';
      this.message = data.message || '';
      this.objectId = data.objectId || '';
      this.objectName = data.objectName || '';
      this.objectType = data.objectType || '';
      this.timestamp = data.timestamp || new Date().getTime();
      this.eventCounter = data.eventCounter || 0;
      this.createdAt = data.createdAt || new Date();
      this.targets = {};
      if (data.targets) {
        Object.keys(data.targets).map(key => {
          const target = data.targets[key];
          if (target && target.userId) {
            const seen =
              typeof target.seen === 'undefined' ? false : target.seen;
            const interacted =
              typeof target.interacted === 'undefined'
                ? false
                : target.interacted;

            this.targets[key] = {
              userId: target.userId,
              seen,
              interacted
            };
          }
          return {
            userId: target,
            seen: false
          };
        });
      } else {
        this.targets = {};
      }
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
        type: this.type,
        username: this.username,
        message: this.message,
        objectId: this.objectId,
        objectName: this.objectName,
        objectType: this.objectType,
        timestamp: this.timestamp,
        eventCounter: this.eventCounter,
        targets: this.targets,
        createdAt: this.createdAt
      };
    }

    // ! need to be private
    mapToDb() {
      return {
        userId: this.userId,
        type: this.type,
        username: this.username,
        message: this.message,
        objectId: this.objectId,
        objectName: this.objectName,
        objectType: this.objectType,
        timestamp: this.timestamp,
        eventCounter: this.eventCounter,
        targets: this.targets,
        createdAt: this.createdAt
      };
    }
  }

  return EventEntity;
};

module.exports = buildEventEntity;
