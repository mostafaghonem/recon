const Models = require('../models');

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger }) => async ({ userId, code }) => {
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
    logger.info(
      `Forget Password Verification Code for ${checkUser.username} confirmed successfully`
    );
  } else
    throw new ApplicationError(
      '.نأسف ، لا يمكننا العثور على حساب بهذا الرقم',
      403
    );
};
