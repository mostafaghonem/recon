/* eslint-disable no-empty */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  ErrorText,
  logger,
  getSoldierById,
  addSoldierInfluence
}) => async ({ user, data, isEditing, isHidden, isArchived }) => {
  const userId = user.id;
  const influence = {
    userId,
    ...data,
    isEditing,
    isHidden,
    isArchived
  };

  try {
    const updateObj = {};
    const soldier = await getSoldierById({ id: data.soldierId });
    const defaultRank = 'soldier';
    if (data.type === 'promotion') {
      influence.category = 'ranking';
      data.promotion.lowerRank = soldier.rank || defaultRank;
      updateObj.rank = data.promotion.higherRank;
    } else if (data.type === 'demotion') {
      if (!soldier.rank || soldier.rank === defaultRank) {
        throw new Error(ErrorText.CANT_DEMOTE_SOLDIER);
      }
      influence.category = 'ranking';
      data.demotion.higherRank = soldier.rank;
      updateObj.rank = data.demotion.lowerRank;
    } else if (data.type === 'execution') {
      influence.category = 'ranking';
      data.execution.higherRank = soldier.rank;
      updateObj.rank = data.execution.lowerRank;
    } else if (data.type === 'flee') {
      influence.category = 'fugitives';
    } else if (data.type === 'comeback') {
      influence.category = 'fugitives';
    } else if (data.type === 'literacy') {
      influence.category = 'literacy';
    } else if (data.type === 'training') {
      influence.category = 'training';
    } else if (data.type === 'travelling') {
      influence.category = 'travelling';
    } else if (data.type === 'punishments') {
      influence.category = 'punishments';
    } else if (data.type === 'driversLicense') {
      influence.category = 'driversLicense';
    }
    const newInfluence = await model.createOne({ document: influence });

    logger.info(
      `new Influence just been added with data => \n${JSON.stringify(
        newInfluence,
        undefined,
        6
      )}`
    );

    addSoldierInfluence({
      id: soldier._id,
      influenceId: newInfluence.id,
      updateObj
    });
    return newInfluence.id;
  } catch (err) {
    if (err.message && err.message.includes('duplicate')) {
      throw new ApplicationError(
        'عذراً هده الوحدة او الكتيبة مسجلة فى قاعدة البيانات',
        401
      );
    } else if (err.message) {
      throw new ApplicationError(err.message, 401);
    } else {
      throw new ApplicationError(
        'حدث خطاً اثناء ادخال المؤثر لقاعدة البيانات, الرجاء التواصل مع مسئول النظم',
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
