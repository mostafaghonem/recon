
// TODO: should be injected only
const bcjs = require('bcryptjs');

// this require only for auto-complete
const models = require('../models');

// Inject dependency !no-requires
const buildEntity = ({ Model = models, bcryptjs = bcjs }) => {
  class Entity {
    async constructor(
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
        password
      }
    ) {
      const exists = await Model.getOneById({ id });
      // exists? this.mapObj(exists): this.mapObj(data);
      if (exists) {
        this.mapObj(exists);
      } else {
        this.mapObj(data);
        this.hashPassword();
      }
    }

    hashPassword() {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(this.password, salt);
      this.password = hash;
    }

    comparePassword(password) {
      return bcrypt.compareSync(password, this.password); // true
    }

    setPassword(newPassword) {}

    mapObj(dbObj) {
      this.fullName = dbObj.fullName;
      this.phone = dbObj.phone;
      this.verifyPhone = dbObj.verifyPhone;
      this.email = dbObj.email;
      this.verifyEmail = dbObj.verifyEmail;
      this.bithDateTs = dbObj.bithDateTs;
      this.gender = dbObj.gender;
      this.job.type = dbObj.job.type;
      this.job.description = dbObj.job.description;
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
};

module.exports = buildEntity;
