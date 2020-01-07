// TODO: should be injected only
const bcjs = require('bcryptjs');
const { ApplicationError: AppError } = require('../../../shared/errors');

// this require only for auto-complete
const Model = require('../models');

// Inject dependency !no-requires
const buildUserEntity = ({ bcrypt = bcjs, ApplicationError = AppError }) => {
  class UserEntity {
    constructor(
      data = {
        id: String,
        fullName: String,
        phone: String,
        email: String,
        birthDateTs: Number,
        gender: String,
        job: { type: String, description: String },
        government: String,
        image: String,
        password: String,
        isArchived: Boolean
      }
    ) {
      this.id = data.id || data._id || 'Not saved yet';
      this.fullName = data.fullName || '';
      this.phone = data.phone || '';
      this.verifyPhone = data.verifyPhone || '';
      this.email = data.email || '';
      this.verifyEmail = data.verifyEmail || '';
      this.birthDateTs = data.birthDateTs || '';
      this.gender = data.gender || '';
      this.job.type = data.job || ''.type;
      this.job.description = data.job || ''.description;
      this.government = data.government || '';
      this.image = data.image || '';
      this.password = data.password || '';
      this.isArchived = data.isArchived || false;
    }

    static async loadDataFromDbById(id) {
      if (!id)
        throw new ApplicationError(
          'There is no id to load data from',
          500,
          true
        );
      const exists = await Model.getOneById({ id });
      // exists? this.mapObj(exists): this.mapObj(data);
      if (exists) {
        return new UserEntity(exists);
      }
      return undefined;
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

    toJson() {
      return {
        id: this.id,
        fullName: this.fullName,
        phone: this.phone,
        email: this.email,
        birthDateTs: this.birthDateTs,
        gender: this.gender,
        job: { type: this.job.type, description: this.job.description },
        government: this.government,
        image: this.image,
        password: this.password
      };
    }

    save() {
      const obj = { ...this.toJson };
      delete obj.id;
      Model.createOne(obj);
    }

    update() {
      const obj = { ...this.toJson() };
      delete obj.id;
      Model.updateOneById(this.id, obj);
    }
  }

  return UserEntity;
};

module.exports = buildUserEntity;
