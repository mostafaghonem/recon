/* eslint-disable no-unused-vars */
//! only require Entity/model
const { ClearanceEntity } = require('../Entity');
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  getSoldierById,
  addSoldierClearance
}) => async ({
  user,
  soldierId,
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
    soldierId,
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
    const soldier = await getSoldierById({ id: soldierId });

    if (!soldier) {
      throw new ApplicationError(
        'عذراً ولكن هذا المجند غير مسجل فى قاعدة البيانات',
        401
      );
    }

    const newClearance = await model.createOne({ document: clearance });

    addSoldierClearance({
      id: soldier._id,
      clearanceId: newClearance.id,
      updateObj
    });

    logger.info(
      `new Clearance just been added with data => \n${JSON.stringify(
        newClearance,
        undefined,
        6
      )}`
    );
    return newClearance.id;
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

  // await createClearanceEvent({
  //   userId,
  //   clearanceId: newClearance.id,
  //   clearance: newClearance.toJson(),
  //   eventType: events.UNITS_REQUEST_ADD_UNIT
  // });
};
