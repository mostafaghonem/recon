//! only require Entity/model
const { UserEntity } = require('../Entity');
const Models = require('../models');

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger, redis }) => async ({
  userId,
  password,
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
  const user = await UserEntity.loadEntityFromDbById(userId);
  if (user) {
    const checkExistence = await redis.getAsync(
      `${checkUser.phone}-changePassword`
    );
    if (checkExistence) {
      if (Number(checkExistence) !== Number(code))
        throw new ApplicationError('Invalid Verfification Code', 400);
      user.setPassword(password);
      await user.save();
      await redis.deleteAsync(`${checkUser.phone}-changePassword`);

      logger.info(
        `"${checkUser.phone}" just changed his password successfully`
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
