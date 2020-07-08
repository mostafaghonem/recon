// TODO: should be injected only
const bcjs = require('bcryptjs');
const mongoose = require('mongoose');
const jsonwebtoken = require('jsonwebtoken');
const Promise = require('bluebird');
const { PERMISSIONS } = require('../../../shared/constants/defaults');

const _jwt = Promise.promisifyAll(jsonwebtoken);
const __ObjectId = mongoose.Types.ObjectId;

const { ApplicationError: AppError } = require('../../../shared/errors');

// this require only for auto-complete
const Model = require('../models');

// Inject dependency !no-requires
const buildUserEntity = (
  obj = {
    bcrypt: bcjs,
    ApplicationError: AppError,
    ObjectId: __ObjectId,
    jwt: _jwt,
    // eslint-disable-next-line no-undef
    _
  }
) => {
  // eslint-disable-next-line no-unused-vars
  const { bcrypt, ApplicationError, ObjectId, jwt, _ } = obj;
  class UserEntity {
    static async loadEntityFromDbById(id) {
      const exists = await Model.getOneById({ id });
      if (exists) return new UserEntity(exists);
      return undefined;
    }

    static async loadEntityFromDbByFacebookId(facebookId) {
      const exists = await Model.getOne({ query: { facebookId } });
      if (exists) return new UserEntity(exists);
      return undefined;
    }

    static async loadEntityFromDbByGoogleId(googleId) {
      const exists = await Model.getOne({ query: { googleId } });
      if (exists) return new UserEntity(exists);
      return undefined;
    }

    static async loadEntityFromDbByUsername(username) {
      const exists = await Model.getOne({
        query: { username }
      });
      if (exists) return new UserEntity(exists);
      return undefined;
    }

    constructor(
      data = {
        fullName: String,
        username: String,
        permissions: Array
      }
    ) {
      this.id = data.id || data._id || new ObjectId();
      this.fullName = data.fullName || '';
      this.password = data.password || '';
      this.username = data.username;
      let userPermissions = [PERMISSIONS.SOLDIER];
      if (data.permissions && _.isArray(data.permissions))
        userPermissions = data.permissions;
      this.permissions = userPermissions;
      this.isArchived = data.isArchived || false;
    }

    hashPassword() {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(this.password, salt);
      this.password = hash;
    }

    comparePassword(password) {
      return bcrypt.compareSync(password, this.password);
    }

    setPassword(newPassword) {
      this.password = newPassword;
      this.hashPassword();
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
        fullName: this.fullName,
        username: this.username
      };
    }

    // ! need to be private
    mapToDb() {
      return {
        fullName: this.fullName,
        username: this.username,
        password: this.password,
        permissions: this.permissions || [PERMISSIONS.SOLDIER],
        isArchived: this.isArchived
      };
    }

    generateToken() {
      const jwtPrivateKey = process.env.jwtPrivateKey || '';
      let permissions = [PERMISSIONS.SOLDIER];
      if (this.permissions && _.isArray(this.permissions))
        permissions = this.permissions;
      return jwt.sign(
        {
          id: this.id,
          exp: Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60 * 30, // Note: in seconds!
          permissions
        },
        jwtPrivateKey
      );
    }
  }

  return UserEntity;
};

module.exports = buildUserEntity;
