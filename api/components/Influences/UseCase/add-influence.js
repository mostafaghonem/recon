/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, logger }) => async ({
  user,
  name,
  type,
  influenceId,
  brigadeId,
  battalionId,
  companyId,
  force,
  army,
  isEditing,
  isHidden,
  isArchived
}) => {
  const userId = user.id;
  const influence = {
    userId,
    type,
    name,
    influenceId,
    brigadeId,
    battalionId,
    companyId,
    force,
    army,
    isEditing,
    isHidden,
    isArchived
  };

  if (user && user.permissions && user.permissions.includes('admin')) {
    influence.status = 'accepted';
  }

  try {
    const newSoldier = await model.createOne({ document: influence });

    logger.info(
      `new Soldier just been added with data => \n${JSON.stringify(
        newSoldier,
        undefined,
        6
      )}`
    );
    return newSoldier.id;
  } catch (err) {
    if (err.message && err.message.includes('duplicate')) {
      throw new ApplicationError(
        'عذراً هده الوحدة او الكتيبة مسجلة فى قاعدة البيانات',
        401
      );
    } else {
      throw new ApplicationError(
        'حدث خطاً اثناء ادخال الوحدة لقاعدة البيانات, الرجاء التواصل مع مسئول النظم',
        401
      );
    }
  }

  // await createInfluenceEvent({
  //   userId,
  //   influenceId: newInfluence.id,
  //   influence: newInfluence.toJson(),
  //   eventType: events.UNITS_REQUEST_ADD_UNIT
  // });
};
