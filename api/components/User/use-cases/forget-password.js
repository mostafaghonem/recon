const Models = require('../models');

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger }) => async ({
  username,
  formattedNumber
}) => {
  const checkUser = await Models.checkExistenceBy({
    username
  });
  if (checkUser) {
    const message = `تم إرسال طلب تغيير كلمة السر خاصتك بنجاح الرجاء إنتظار كلمة السر الجديدة`;
    logger.info(`Verfification Code Sent Successfully to ${formattedNumber}`);
  } else
    throw new ApplicationError(
      '.نأسف ، لا يمكننا العثور على حساب بهذا الرقم',
      403
    );
};
