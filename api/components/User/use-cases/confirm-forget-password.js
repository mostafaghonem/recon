const Models = require('../models');

// should have no implementation for any specific orm
module.exports = ({ redis, ApplicationError, logger }) => async ({
  phone,
  code
}) => {
  const checkUser = await Models.checkExistenceBy({ phone });
  if (checkUser) {
    const checkExistence = await redis.getAsync(`${phone}-RecoveryCode`);
    if (checkExistence) {
      if (Number(checkExistence) !== Number(code))
        throw new ApplicationError('رمز التحقق غير صالح', 400);

      logger.info(
        `Forget Password Verification Code for ${phone} confirmed successfully`
      );
    } else
      throw new ApplicationError(
        'يجب أن تحصل على رمز التحقق أولاً أو حاول مرة أخرى',
        400
      );
  } else
    throw new ApplicationError(
      '.نأسف ، لا يمكننا العثور على حساب بهذا الرقم',
      403
    );
};
