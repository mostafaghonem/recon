const model = require('../models');

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger }) => async (
  userId,
  identificationImages
) => {
  const select = 'fullName permissions';
  const user = await model.getOneById({ id: userId, select });
  if (user) {
    if (identificationImages[0]) {
      const update = {
        identificationImages,
        identificationStatus: true
      };
      await model.updateOneById({
        id: userId,
        update
      });
      if (!user.permissions.includes('houseOwner'))
        update.$push = { permissions: 'houseOwner' };
    }

    logger.info(`${userId} identity just updated`);
  } else
    throw new ApplicationError(
      '.نأسف ، لا يمكننا العثور على حساب بهذا الرقم',
      403
    );
};
