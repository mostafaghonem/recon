const Models = require('../models');

// should have no implementation for any specific orm
module.exports = ({ redis, ApplicationError, logger }) => async ({
  userId,
  code
}) => {
  const query = {
    _id: userId,
    isArchived: false
  };
  const select = 'phone';
  const checkUser = await Models.getOne({
    query,
    select
  });
  if (checkUser) {
    const checkExistence = await redis.getAsync(
      `${checkUser.phone}-changePassword`
    );
    if (checkExistence) {
      if (Number(checkExistence) !== Number(code))
        throw new ApplicationError('رمز التحقق غير صالح', 400);

      logger.info(
        `Forget Password Verification Code for ${checkUser.phone} confirmed successfully`
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
