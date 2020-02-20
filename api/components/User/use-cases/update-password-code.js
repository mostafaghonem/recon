const Models = require('../models');

function getRandomCode(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// should have no implementation for any specific orm
module.exports = ({
  redis,
  ApplicationError,
  logger,
  smsService
}) => async userId => {
  const query = {
    _id: userId,
    isArchived: false
  };
  const select = 'phone';
  const checkUser = await Models.getOne({
    query,
    select
  });
  if (checkUser) {
    const checkExistence = await redis.getAsync(
      `${checkUser.phone}-changePassword`
    );
    if (!checkExistence) {
      const verificationCode = getRandomCode(1000, 9999);
      await redis.setexAsync(
        `${checkUser.phone}-changePassword`,
        5 * 60,
        verificationCode
      );
      const message = `Your SKN Verification Number is ${verificationCode}`;
      const sendSms = await smsService(`+2${checkUser.phone}`, message, 'e');
      if (!sendSms)
        throw new ApplicationError("Couldn't Send Verfification Code", 500);

      logger.info(`Verfification Code Sent Successfully to ${checkUser.phone}`);
      // return verificationCode;
    } else throw new ApplicationError('عليك أن تنتظر 5 دقائق بعد كل كود', 400);
  } else
    throw new ApplicationError(
      '.نأسف ، لا يمكننا العثور على حساب بهذا الرقم',
      403
    );
};
