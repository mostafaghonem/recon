/* eslint-disable no-unused-vars */
//! only require Entity/model
const { UserEntity } = require('../Entity');

/**
 * @description check user login data and return login token if user is exist and verified
 * @param {Object} of {String} phone, {String} password, {String} agent
 * @returns {token} if user found or {error} if not
 * @memberof use-cases
 */

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger, redis }) => async ({
  phone,
  password,
  code
}) => {
  const user = await UserEntity.loadEntityFromDbByPhone(phone);
  if (user) {
    const checkExistence = await redis.getAsync(`${phone}-RecoveryCode`);
    if (checkExistence) {
      if (Number(checkExistence) !== Number(code))
        throw new ApplicationError('Invalid Verfification Code', 400);
      user.setPassword(password);
      await user.save();
      logger.info(`"${phone}" just changed his password successfully`);
    } else
      throw new ApplicationError(
        'You should get Verification Code first or again',
        400
      );
  } else
    throw new ApplicationError(
      '.نأسف ، لا يمكننا العثور على حساب بهذا الرقم',
      403
    );
};
