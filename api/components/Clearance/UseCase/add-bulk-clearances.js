/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  getSoldierById,
  addSoldierClearance
}) => async ({
  user,
  soldiersIds,
  unitId,
  newUnitId,
  newUnitType,
  joinDate,
  joinPlace,
  departureDate,
  clearanceStatus,
  soldierStatus,
  notes,
  isHidden,
  isArchived
}) => {
  const userId = user.id;

  const clearance = {
    userId,
    unitId,
    newUnitId,
    newUnitType,
    joinDate,
    joinPlace,
    departureDate,
    clearanceStatus,
    soldierStatus,
    notes,
    isHidden,
    isArchived
  };

  if (user && user.permissions && user.permissions.includes('admin')) {
    clearance.status = 'accepted';
  }

  try {
    const updateObj = {};
    const promises = soldiersIds.map(async soldierId => {
      const data = await model.createOne({
        document: { ...clearance, soldierId }
      });

      return addSoldierClearance({
        id: soldierId,
        clearanceId: data.id,
        updateObj
      });
    });

    const responses = await Promise.all(promises);

    logger.info(
      `new Clearance just been added with data => \n${JSON.stringify(
        responses,
        undefined,
        6
      )}`
    );
    return responses.id;
  } catch (err) {
    if (err.message && err.message.includes('duplicate')) {
      throw new ApplicationError(
        'عذراً ولكن هذا المجند مسجل بالفعل فى قاعدة البيانات',
        401
      );
    } else {
      // eslint-disable-next-line no-console
      console.log('eror in adding clearance', err.message);
      throw new ApplicationError(
        'حدث خطاً ما اثناء ادخال المجند لقاعدة البيانات الرجاء التواصل مع مسئول النظم',
        401
      );
    }
  }

  async function bulkInsertClearances(items) {
    try {
      const response = await model.DbAccess.insertMany(items);
      logger.info(
        `Default influences upserted successfully => upserted: ${response.nUpserted}, modified: ${response.nModified}`
      );
    } catch (error) {
      logger.info(
        `### ERROR ### while upserting Default influences => ${error.message}`
      );
    }
  }
};
