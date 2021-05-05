const model = require('../models');

module.exports = ({
  ApplicationError,
  ErrorText,
  logger,
  changeSoldierUnit,
  changeStaffUnit
}) => async ({ data, type, unit, unitId, confirmationNumber, user }) => {
  try {
    let initial = false;
    if (!data) {
      throw new ApplicationError(ErrorText.CANT_FIND_SOLDIER, 403);
    }

    if (!unit) {
      throw new ApplicationError(ErrorText.CANT_FIND_DIVISION, 403);
    }

    if (!data.unit) {
      initial = true;
    }

    if (data.unit && data.unit.unitId.toString() === unitId) {
      throw new ApplicationError(
        ErrorText.CANT_CHANGE_SAME_UNIT.replace('{s}', data.fullName),
        403
      );
    }

    const unitDoc = {
      unitId,
      confirmationNumber,
      divisionId: unit.divisionId,
      isChangeOfUnit: !initial
    };
    const idKey = `${type}Id`;
    const document = {
      [idKey]: data._id,
      initial,
      unitId,
      userId: user.id,
      pastUnit: data.unit,
      confirmationNumber
    };
    const newUnitChange = await model.createOne({ document });

    if (newUnitChange) {
      let update = {};
      if (type === 'soldier') {
        update = await changeSoldierUnit({
          id: data._id,
          unit: unitDoc
        });
      } else if (type === 'staff') {
        update = await changeStaffUnit({
          id: data._id,
          unit: unitDoc
        });
      }

      logger.info(
        `new change of added with data => \n${JSON.stringify(
          document,
          undefined,
          6
        )}`
      );
      return update;
    }
    return { error: `Couldnt update unit for ${data.militaryId}` };
  } catch (e) {
    return { error: e.message };
  }
};
