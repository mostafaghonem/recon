const { UploadedOfficesRequestsEntity } = require('../Entity');

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger }) => async ({
  userId,
  officeId
}) => {
  const newUploadedOfficeRequest = new UploadedOfficesRequestsEntity({
    userId,
    officeId
  });
  await newUploadedOfficeRequest.save();

  logger.info(
    `new uploaded office request added with data => \n${JSON.stringify(
      newUploadedOfficeRequest.toJson(),
      undefined,
      6
    )}`
  );
};
