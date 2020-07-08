//! only require Entity/model
const model = require('../models');

// should have no implementation for any specific orm
module.exports = ({
  ApplicationError,
  logger,
  getUserIdentityStatus
}) => async userId => {
  const query = {
    _id: userId,
    isArchived: false
  };
  const select =
    'fullName username email birthDateTs gender job government image identificationImages identificationStatus permissions';
  const user = await model.getOne({ query, select });
  if (user) {
    user.userIdentityStatus = await getUserIdentityStatus(userId);
    logger.info(`"${user.fullName}" just got his profile data.`);
    return user;
  }
  throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا الحساب', 403);
};
