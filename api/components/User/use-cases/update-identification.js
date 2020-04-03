const model = require('../models');

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger }) => async (
  userId,
  identificationImages
) => {
  const select = 'fullName';
  const user = await model.getOneById({ id: userId, select });
  if (user) {
    if (identificationImages[0]) {
      await model.updateOneById({
        id: userId,
        update: { identificationImages, identificationStatus: true }
      });
    }

    logger.info(`${userId} identity just updated`);
  } else
    throw new ApplicationError(
      '.نأسف ، لا يمكننا العثور على حساب بهذا الرقم',
      403
    );
};
