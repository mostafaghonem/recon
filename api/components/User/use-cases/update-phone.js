const model = require('../models');

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger, redis }) => async ({
  userId,
  phone,
  code
}) => {
  const select = 'phone';
  const user = await model.getOneById({ id: userId, select });
  if (user) {
    const query = {
      phone,
      isArchived: false
    };
    const isDuplicate = await model.getOne({ query, select });
    if (isDuplicate && String(isDuplicate._id) !== String(user._id))
      throw new ApplicationError('هذا الرقم موجود بالفعل', 400);

    if (user.phone !== phone) {
      const checkCode = await redis.getAsync(`${phone}-phone-update`);
      if (Number(checkCode) !== Number(code))
        throw new ApplicationError('Invalid Verfification Code', 400);
    }
    await model.updateOneById({
      id: userId,
      update: { phone }
    });
    await redis.deleteAsync(`${phone}-phone-update`);
    logger.info(`${userId} just updated his phone`);
  } else
    throw new ApplicationError(
      '.نأسف ، لا يمكننا العثور على حساب بهذا الرقم',
      403
    );
};
