const model = require('../models');

function getRandomCode(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// should have no implementation for any specific orm
module.exports = ({ redis, ApplicationError, logger, smsService }) => async (
  userId,
  phone
) => {
  const select = 'phone';
  const user = await model.getOneById({ id: userId, select });
  if (user) {
    const userPhone = String(phone).replace('+2', '');
    const query = {
      phone: userPhone,
      isArchived: false
    };
    const isDuplicate = await model.getOne({ query, select });

    if (isDuplicate && String(isDuplicate._id) !== String(user._id))
      throw new ApplicationError('هذا الرقم موجود بالفعل', 400);
    else if (isDuplicate && String(isDuplicate._id) === String(user._id))
      throw new ApplicationError('انت لا تحتاج لتفعيل هذا الرقم', 400);

    const checkExistence = await redis.getAsync(`${userPhone}-phone-update`);
    if (!checkExistence) {
      const verificationCode = getRandomCode(1000, 9999);
      await redis.setexAsync(
        `${userPhone}-phone-update`,
        5 * 60,
        verificationCode
      );
      const message = `Your SKN Phone Verification Number is ${verificationCode}`;
      const sendSms = await smsService(phone, message, 'e');
      if (!sendSms)
        throw new ApplicationError("Couldn't Send Verfification Code", 500);

      logger.info(`Phone Verfification Code Sent Successfully to ${phone}`);
      // return verificationCode;
    } else throw new ApplicationError('عليك أن تنتظر 5 دقائق بعد كل كود', 400);
  } else
    throw new ApplicationError(
      '.نأسف ، لا يمكننا العثور على حساب بهذا الرقم',
      403
    );
};
