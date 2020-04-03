const { UploadedUnitsRequestsEntity } = require('../Entity');

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger }) => async ({
  userId,
  unitId
}) => {
  const newUploadedUnitRequest = new UploadedUnitsRequestsEntity({
    userId,
    unitId
  });
  await newUploadedUnitRequest.save();

  logger.info(
    `new uploaded unit request added with data => \n${JSON.stringify(
      newUploadedUnitRequest.toJson(),
      undefined,
      6
    )}`
  );
};
