/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, logger }) => async ({
  type,
  ar,
  value,
  user,
  isHidden,
  isArchived
}) => {
  const userId = user.id;

  const constant = {
    userId,
    type,
    ar,
    value,
    isHidden,
    isArchived
  };

  try {
    const newconstant = await model.createOne({ document: constant });

    logger.info(
      `new constant just been added with data => \n${JSON.stringify(
        newconstant,
        undefined,
        6
      )}`
    );
    return newconstant.id;
  } catch (err) {
    if (err.message && err.message.includes('duplicate')) {
      throw new ApplicationError(
        'عذراً ولكن هذه المكاتبة مسجلة بالفعل فى قاعدة البيانات',
        401
      );
    } else {
      // eslint-disable-next-line no-console
      console.log('eror in adding constant', err.message);
      throw new ApplicationError(
        'حدث خطاً ما اثناء ادخال الكود لقاعدة البيانات الرجاء التواصل مع مسئول النظم',
        401
      );
    }
  }

  // await createconstantEvent({
  //   userId,
  //   constantId: newconstant.id,
  //   constant: newconstant.toJson(),
  //   eventType: events.UNITS_REQUEST_ADD_UNIT
  // });
};
