const Models = require('../models');

function getRandomCode(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger }) => async userId => {
  const query = {
    _id: userId,
    isArchived: false
  };
  const select = 'username';
  const checkUser = await Models.getOne({
    query,
    select
  });
  if (checkUser) {
    const verificationCode = getRandomCode(1000, 9999);

    const message = `Your SKN Verification Number is ${verificationCode}`;

    logger.info(
      `Verfification Code Sent Successfully to ${checkUser.username}`
    );
    // return verificationCode;
  } else
    throw new ApplicationError(
      '.نأسف ، لا يمكننا العثور على حساب بهذا الرقم',
      403
    );
};
