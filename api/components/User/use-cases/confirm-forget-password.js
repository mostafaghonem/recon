const Models = require('../models');

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger }) => async ({ username }) => {
  const checkUser = await Models.checkExistenceBy({ username });
  if (checkUser) {
    logger.info(
      `Forget Password Verification Code for ${username} confirmed successfully`
    );
  } else
    throw new ApplicationError(
      '.نأسف ، لا يمكننا العثور على حساب بهذا الرقم',
      403
    );
};
