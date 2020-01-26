function getRandomCode(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// should have no implementation for any specific orm
module.exports = ({
  redis,
  ApplicationError,
  logger,
  smsService
}) => async phone => {
  const userPhone = String(phone).replace('+2', '');
  const checkExistence = await redis.getAsync(`${userPhone}-register-user`);
  if (!checkExistence) {
    const verificationCode = getRandomCode(1000, 9999);
    await redis.setexAsync(
      `${userPhone}-register-user`,
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
};
