/* eslint-disable no-unused-vars */
//! only require Entity/model
const { UserEntity } = require('../Entity');
const { PERMISSIONS } = require('../../../shared/constants/defaults');

/**
 * @description check user login data and return login token if user is exist and verified
 * @param {Object} of {String} phone, {String} password, {String} agent
 * @returns {token} if user found and is Admin or {error} if not
 * @memberof use-cases
 */

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger }) => async ({
  phone,
  password,
  agent
}) => {
  const user = await UserEntity.loadEntityFromDbByUsername(phone);
  if (user && user.permissions.includes(PERMISSIONS.ADMIN)) {
    const checkPassword = user.comparePassword(password);
    if (!checkPassword)
      throw new ApplicationError(
        '.كلمة سر خاطئة. يرجى المحاولة مرة أخرى أو يمكنك إعادة تعيين كلمة المرور الخاصة بك',
        403
      );
    logger.info(`"${phone}" just Logged in from ${agent}`);

    const token = user.generateToken();
    return token;
  }
  throw new ApplicationError(
    '.نأسف ، لا يمكننا العثور على حساب بهذا الرقم',
    403
  );
};
