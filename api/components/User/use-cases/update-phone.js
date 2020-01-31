const model = require('../models');

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger, redis }) => async (
  userId,
  updatedProfile
) => {
  const select = 'phone';
  const user = await model.getOneById({ id: userId, select });
  if (user) {
    const query = {
      phone: updatedProfile.phone,
      isArchived: false
    };
    const isDuplicate = await model.getOne({ query, select });
    if (isDuplicate && String(isDuplicate._id) !== String(user._id))
      throw new ApplicationError('هذا الرقم موجود بالفعل', 400);

    if (user.phone !== updatedProfile.phone) {
      const checkCode = await redis.getAsync(
        `${updatedProfile.phone}-phone-update`
      );
      if (!checkCode) throw new ApplicationError('رمز التحقق غير صالح', 400);
    }
    const updateUserProfile = await model.updateOneById({
      id: userId,
      update: updatedProfile
    });
    logger.info(`${userId} just updated his phone`);
  } else
    throw new ApplicationError(
      '.نأسف ، لا يمكننا العثور على حساب بهذا الرقم',
      403
    );
};
