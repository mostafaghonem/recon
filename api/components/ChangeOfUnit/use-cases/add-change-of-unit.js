const model = require('../models');

module.exports = ({
  ApplicationError,
  ErrorText,
  logger,
  getSoldierById,
  getDivisionById,
  changeSoldierUnit
}) => async ({ soldierId, unitId, confirmationNumber, user }) => {
  const soldier = await getSoldierById({ id: soldierId });
  if (!soldier) {
    throw new ApplicationError(ErrorText.CANT_FIND_SOLDIER, 403);
  }

  const unit = await getDivisionById({ id: unitId });
  if (!unit) {
    throw new ApplicationError(ErrorText.CANT_FIND_UNIT, 403);
  }

  if (soldier.unit.unitId.toString() === unitId) {
    throw new ApplicationError(ErrorText.CANT_CHANGE_SAME_UNIT, 403);
  }

  const unitDoc = {
    unitId,
    confirmationNumber,
    divisionId: unit.divisionId,
    isChangeOfUnit: true
  };
  const document = {
    soldierId,
    unitId,
    userId: user.id,
    pastUnit: soldier.unit,
    confirmationNumber
  };
  const newUnitChange = await model.createOne({ document });

  if (newUnitChange) {
    const update = await changeSoldierUnit({ id: soldierId, unit: unitDoc });
    logger.info(
      `new change of added with data => \n${JSON.stringify(
        document,
        undefined,
        6
      )}`
    );
  }
};
