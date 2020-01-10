// TODO: should be injected only
const bcjs = require('bcryptjs');
const mongoose = require('mongoose');
const jsonwebtoken = require('jsonwebtoken');

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
    jwt: _jwt
  }
) => {
  const { bcrypt, ApplicationError, ObjectId } = obj;
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

    static async loadEntityFromDbByPhone(phone) {
      const exists = await Model.getOne({
        query: { phone, verifyPhone: true }
      });
      if (exists) return new UserEntity(exists);
      return undefined;
    }

    constructor(
      data = {
        fullName: String,
        phone: String,
        email: String,
        birthDateTs: Number,
        gender: String,
        job: { type: String, description: String },
        government: String,
        image: String,
        facebookId: String
      }
    ) {
      this.facebookId = data.facebookId || '';
      this.id = data.id || data._id || new ObjectId();
      this.fullName = data.fullName || '';
      this.phone = data.phone || '';
      this.verifyPhone = data.verifyPhone || false;
      this.email = data.email || '';
      this.verifyEmail = data.verifyEmail || false;
      this.birthDateTs = data.birthDateTs || '';
      this.gender = data.gender || '';
      if (data.job) {
        this.job = {
          type: data.job.type || '',
          description: data.job.description || ''
        };
      }
      this.government = data.government || '';
      this.image = data.image || '';
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
      if (this.isArchived)
        throw new ApplicationError('UserEntity not found', 404);

      return {
        id: this.id,
        fullName: this.fullName,
        phone: this.phone,
        verifyPhone: this.verifyPhone,
        email: this.email,
        verifyEmail: this.verifyEmail,
        birthDateTs: this.birthDateTs,
        gender: this.gender,
        job: { type: this.job.type, description: this.job.description },
        government: this.government,
        image: this.image
      };
    }

    // ! need to be private
    mapToDb() {
      return {
        fullName: this.fullName,
        phone: this.phone,
        verifyPhone: this.verifyPhone,
        email: this.email,
        verifyEmail: this.verifyEmail,
        birthDateTs: this.birthDateTs,
        gender: this.gender,
        job: { type: this.job.type, description: this.job.description },
        government: this.government,
        image: this.image,
        password: this.password,
        isArchived: this.isArchived
      };
    }

    generateToken() {
      const jwtPrivateKey = process.env.jwtPrivateKey || '';

      return jwt.sign(
        {
          id: this._id,
          exp: Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60 * 30 // Note: in seconds!
        },
        jwtPrivateKey
      );
    }
  }

  return UserEntity;
};

module.exports = buildUserEntity;
