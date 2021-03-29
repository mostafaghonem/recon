const model = require('../models');

module.exports = ({
  ApplicationError,
  ErrorText,
  logger,
  changeSoldierUnit
}) => async ({ soldier, unit, unitId, confirmationNumber, user }) => {
  try {
    let initial = false;
    if (!soldier) {
      throw new ApplicationError(ErrorText.CANT_FIND_SOLDIER, 403);
    }

    if (!unit) {
      throw new ApplicationError(ErrorText.CANT_FIND_DIVISION, 403);
    }

    if (!soldier.unit) {
      initial = true;
    }

    if (soldier.unit && soldier.unit.unitId.toString() === unitId) {
      throw new ApplicationError(ErrorText.CANT_CHANGE_SAME_UNIT, 403);
    }

    const unitDoc = {
      unitId,
      confirmationNumber,
      divisionId: unit.divisionId,
      isChangeOfUnit: !initial
    };
    const document = {
      soldierId: soldier._id,
      initial,
      unitId,
      userId: user.id,
      pastUnit: soldier.unit,
      confirmationNumber
    };
    const newUnitChange = await model.createOne({ document });

    if (newUnitChange) {
      const update = await changeSoldierUnit({
        id: soldier._id,
        unit: unitDoc
      });
      logger.info(
        `new change of added with data => \n${JSON.stringify(
          document,
          undefined,
          6
        )}`
      );
      return update;
    }
    return { error: `Couldnt update unit for ${soldier.militaryId}` };
  } catch (e) {
    return { error: e.message };
  }
};
