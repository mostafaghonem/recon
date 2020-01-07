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
  code: candidateCode
}) => {
  // ! must-be-deleted
  await redis.setexAsync(phone, 5 * 60, candidateCode);

  const code = await redis.getAsync(phone);

  logger.info(`the otp is => ${code}`);

  if (code !== candidateCode) throw new ApplicationError('Invalid code', 400);

  const isDuplicate = await Models.checkExistanceBy({ email, phone });

  if (isDuplicate) throw new ApplicationError('Duplicate email or phone', 400);

  const newUser = new UserEntity({
    image,
    fullName,
    phone,
    email,
    birthDateTs,
    gender,
    job: { type: job.type, description: job.description },
    government
  });

  // TODO: should be a function
  // @INQ: does we need verifyPhone (no need for it as we don't register if it's not)
  newUser.verifyPhone = true;

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
