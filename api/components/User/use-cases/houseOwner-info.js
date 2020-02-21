//! only require Entity/model
const { UserEntity } = require('../Entity');
const model = require('../models');

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger, PERMISSIONS }) => async (
  userId,
  contactInfo
) => {
  const query = {
    _id: userId,
    permissions: PERMISSIONS.HOUSE_OWNER,
    isArchived: false
  };
  let select = 'fullName government image gender';
  if (contactInfo) select += ' phone email address';
  const user = await model.getOne({ query, select });
  if (user) {
    logger.info(`"${user.fullName}" just got his profile data.`);
    return user;
  } else
    throw new ApplicationError(
      '.عذرًا ، لا يمكننا العثور على هذا الحساب أو أنه ليس مالك منزل',
      403
    );
};
