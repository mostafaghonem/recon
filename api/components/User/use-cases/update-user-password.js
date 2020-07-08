//! only require Entity/model
const { UserEntity } = require('../Entity');
const Models = require('../models');

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger }) => async ({
  userId,
  password
}) => {
  const query = {
    _id: userId,
    isArchived: false
  };
  const select = 'username';
  const checkUser = await Models.getOne({
    query,
    select
  });
  const user = await UserEntity.loadEntityFromDbById(userId);
  if (user) {
    user.setPassword(password);
    await user.save();
    logger.info(
      `"${checkUser.username}" just changed his password successfully`
    );
  } else
    throw new ApplicationError(
      '.نأسف ، لا يمكننا العثور على حساب بهذا الرقم',
      403
    );
};
