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
  const checkExistence = await redis.getAsync(phone);
  if (!checkExistence) {
    const verificationCode = getRandomCode(1000, 9999);
    await redis.setexAsync(phone, 5 * 60, verificationCode);
    const message = `Your SKN Verification Number is ${verificationCode}`;
    const sendSms = await smsService.sendSms(phone, message, 'e');
    if (!sendSms)
      throw new ApplicationError("Couldn't Send Verfification Code", 500);

    logger.info(`Verfification Code Sent Successfully`);
    return verificationCode;
  }
  throw new ApplicationError('you have to wait 5 mins after each code', 409);
};
