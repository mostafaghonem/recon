const { ChangeOfUnitEntity } = require('../Entity');

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger, requestTypes }) => async ({
  userId,
  unitId,
  update
}) => {
  const newUploadedUnitChange = new ChangeOfUnitEntity({
    userId,
    unitId,
    update,
    type: requestTypes.EDIT
  });
  await newUploadedUnitChange.save();

  logger.info(
    `new uploaded unit request added with data => \n${JSON.stringify(
      newUploadedUnitChange.toJson(),
      undefined,
      6
    )}`
  );
};
