// TODO: should be injected only
const bcjs = require('bcryptjs');
const { ApplicationError: AppError } = require('../../../shared/errors');

// this require only for auto-complete
const Model = require('../models');

// Inject dependency !no-requires
const buildEntity = ({ bcrypt = bcjs, ApplicationError = AppError }) => {
  class Entity {
    constructor(
      data = {
        id,
        fullName,
        phone,
        email,
        bithDateTs,
        gender,
        job: { type, description },
        government,
        image,
        password,
        isArchived,
        createdAt,
        updatedAt
      }
    ) {
      this.mapObj(data);
    }

    /**
     * @returns true if this entity exists and load data from db, false otherwise
     * @memberof Entity
     */
    async loadDataFromDbById() {
      if (!this.id)
        throw new ApplicationError(
          'There is no id to load data from',
          500,
          true
        );
      const exists = await Model.getOneById({ id });
      // exists? this.mapObj(exists): this.mapObj(data);
      if (exists) {
        this.mapObj(exists);
        return true;
      } else return false;
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
        bithDateTs: this.bithDateTs,
        gender: this.gender,
        job: { type: this.job.type, description: this.job.description },
        government: this.government,
        image: this.image,
        password: this.password
      };
    }

    mapObj(dbObj) {
      this.id = dbObj._id;
      this.fullName = dbObj.fullName;
      this.phone = dbObj.phone;
      this.verifyPhone = dbObj.verifyPhone;
      this.email = dbObj.email;
      this.verifyEmail = dbObj.verifyEmail;
      this.bithDateTs = dbObj.bithDateTs;
      this.gender = dbObj.gender;
      this.job = {
        type: dbObj.job.type,
        description: dbObj.job.description
      };
      this.government = dbObj.government;
      this.image = dbObj.image;
      this.password = dbObj.password;
      this.isArchived = dbObj.isArchived;
      this.createdAt = dbObj.createdAt;
      this.updatedAt = dbObj.updatedAt;
    }

    save() {}

    update({}) {}
  }

  return Entity;
};

module.exports = buildEntity;
