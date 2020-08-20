const { ChangeOfUnitEntity } = require('../Entity');

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger }) => async ({
  userId,
  unitId
}) => {
  const newUploadedUnitChange = new ChangeOfUnitEntity({
    userId,
    unitId
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
