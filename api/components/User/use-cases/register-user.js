/* eslint-disable no-unused-vars */
//! only require Entity/model
const { UserEntity } = require('../Entity');

// ! use Entity as much as possible use model for only urgent cases
const Models = require('../models');

// should have no implementation for any specific orm
module.exports = ({ redis, ApplicationError, logger }) => async ({
  image,
  fullName,
  phone,
  email,
  birthDateTs,
  gender,
  job = { type: String, description: String },
  government,
  password,
  facebookId,
  googleId,
  code: candidateCode
}) => {
  const code = await redis.getAsync(`${phone}-register-user`);
  logger.info(`the otp is => ${code}`);

  // if (code !== candidateCode) throw new ApplicationError('Invalid code', 400);

  const isDuplicate = await Models.checkExistenceBy({ email, phone });

  if (isDuplicate) throw new ApplicationError('Duplicate email or phone', 400);

  const newUser = new UserEntity({
    image,
    fullName,
    phone,
    email,
    birthDateTs,
    gender,
    job: { type: job.type, description: job.description },
    government,
    facebookId,
    googleId
  });

  newUser.setPassword(password);

  await newUser.save();

  logger.info(
    `new User just registered with data => \n${JSON.stringify(
      newUser.toJson(),
      undefined,
      6
    )}`
  );
};
