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
        throw new ApplicationError('Invalid Verfification Code', 400);

      logger.info(
        `Forget Password Verification Code for ${checkUser.phone} confirmed successfully`
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
