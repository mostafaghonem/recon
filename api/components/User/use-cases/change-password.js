//! only require Entity/model
const { UserEntity } = require('../Entity');

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger }) => async ({
  username,
  password
}) => {
  const user = await UserEntity.loadEntityFromDbByUsername(username);
  if (user) {
    user.setPassword(password);
    await user.save();

    logger.info(`"${username}" just changed his password successfully`);
  } else
    throw new ApplicationError(
      '.نأسف ، لا يمكننا العثور على حساب بهذا الرقم',
      403
    );
};
