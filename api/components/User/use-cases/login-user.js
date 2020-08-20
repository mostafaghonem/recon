/* eslint-disable no-unused-vars */
//! only require Entity/model
const { UserEntity } = require('../Entity');

/**
 * @description check user login data and return login token if user is exist and verified
 * @param {Object} of {String} username, {String} password, {String} agent
 * @returns {token} if user found or {error} if not
 * @memberof use-cases
 */

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger }) => async ({
  username,
  password,
  agent
}) => {
  const user = await UserEntity.loadEntityFromDbByUsername(username);
  if (user) {
    const checkPassword = user.comparePassword(password);
    if (!checkPassword)
      throw new ApplicationError(
        '.كلمة سر خاطئة. يرجى المحاولة مرة أخرى أو يمكنك إعادة تعيين كلمة المرور الخاصة بك',
        403
      );
    logger.info(`"${username}" just Logged in from ${agent}`);

    const token = user.generateToken();
    return { ...user, token };
  }
  throw new ApplicationError(
    '.نأسف ، لا يمكننا العثور على حساب بهذا الاسم المستخدم',
    403
  );
};
