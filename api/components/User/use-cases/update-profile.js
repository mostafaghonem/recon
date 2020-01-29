const model = require('../models');

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger }) => async (
  userId,
  updatedProfile
) => {
  const select = 'identificationImages';
  const user = await model.getOneById({ id: userId, select });
  if (user) {
    const identificationImages = user.identificationImages || [];
    updatedProfile.identificationImages.forEach(url => {
      // TODO add to admin identity requests
      // if(!identificationImages.includes(url))
    });
    const updateUserProfile = await model.updateOneById({
      id: userId,
      update: updatedProfile
    });

    logger.info(`${userId} just updated his profile`);
  } else
    throw new ApplicationError(
      '.نأسف ، لا يمكننا العثور على حساب بهذا الرقم',
      403
    );
};
