/* eslint-disable no-unused-vars */
//! only require Entity/model
const { UserEntity } = require('../Entity');
const jsonwebtoken = require('jsonwebtoken');
const jwt = Promise.promisifyAll(jsonwebtoken);
const config = require('config');

// ! use Entity as much as possible use model for only urgent cases
const Models = require('../models');

/**
 * @description check user login data and return login token if user is exist and verified
 * @param {Object} of {String} phone, {String} password, {String} agent
 * @returns {token} if user found or {error} if not
 * @memberof use-cases
 */

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger }) => async ({
  phone,
  password,
  agent
}) => {
  const query = {
    phone,
    verifyPhone: true
  };
  const select = 'password';
  const checkExistance = await Models.getUserByPhone(query, select);
  if (checkExistance) {
    const checkPassword = await new UserEntity().compareLoginPassword(
      String(password),
      checkExistance.password
    );
    if (!checkPassword)
      throw new ApplicationError(
        '.كلمة سر خاطئة. يرجى المحاولة مرة أخرى أو يمكنك إعادة تعيين كلمة المرور الخاصة بك',
        403
      );

    logger.info(`"${phone}" just Logged in from ${agent}`);

    const jwtPrivateKey =
      process.env.jwtPrivateKey || config.get('jwtPrivateKey') || '';

    return jwt.sign(
      {
        id: checkExistance._id,
        agent,
        exp: Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60 * 30 // Note: in seconds!
      },
      jwtPrivateKey
    );
  } else
    throw new ApplicationError(
      '.نأسف ، لا يمكننا العثور على حساب بهذا الرقم',
      403
    );
};
