//! only require Entity/model
const { UserEntity } = require('../Entity');
const model = require('../models');

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger }) => async userId => {
  const select =
    'fullName phone email birthDateTs gender job government image identificationImages';
  const user = await model.getOneById({ id: userId, select });
  if (user) {
    logger.info(`"${user.fullName}" just got his profile data.`);
    return user;
  } else
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا الحساب', 403);
};
