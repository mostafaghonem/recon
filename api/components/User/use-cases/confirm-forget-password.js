const Models = require('../models');

function getRandomCode(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// should have no implementation for any specific orm
module.exports = ({ redis, ApplicationError, logger }) => async ({
  phone,
  code
}) => {
  const checkUser = await Models.checkExistenceBy({ phone });
  if (checkUser) {
    const checkExistence = await redis.getAsync(phone + '-RecoveryCode');
    if (checkExistence) {
      if (Number(checkExistence) !== Number(code))
        throw new ApplicationError('Invalid Verfification Code', 400);

      logger.info(
        `Forget Password Verification Code for ${phone} confirmed successfully`
      );
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
