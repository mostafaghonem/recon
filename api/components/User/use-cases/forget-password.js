const Models = require('../models');

function getRandomCode(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// should have no implementation for any specific orm
module.exports = ({ redis, ApplicationError, logger, smsService }) => async ({
  phone,
  formattedNumber
}) => {
  const checkUser = await Models.checkExistenceBy({ phone });
  if (checkUser) {
    const checkExistence = await redis.getAsync(phone + '-RecoveryCode');
    if (!checkExistence) {
      const verificationCode = getRandomCode(1000, 9999);
      await redis.setexAsync(phone + '-RecoveryCode', 5 * 60, verificationCode);
      const message = `Your SKN Verification Number is ${verificationCode}`;
      const sendSms = await smsService(formattedNumber, message, 'e');
      if (!sendSms)
        throw new ApplicationError("Couldn't Send Verfification Code", 500);

      logger.info(`Verfification Code Sent Successfully to ${formattedNumber}`);
      // return verificationCode;
    } else
      throw new ApplicationError(
        'you have to wait 5 mins after each code',
        400
      );
  } else
    throw new ApplicationError(
      '.نأسف ، لا يمكننا العثور على حساب بهذا الرقم',
      403
    );
};
