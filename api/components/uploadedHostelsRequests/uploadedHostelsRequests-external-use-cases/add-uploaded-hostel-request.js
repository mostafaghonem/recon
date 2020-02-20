const { UploadedHostelsRequestsEntity } = require('../Entity');

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger }) => async ({
  userId,
  hostelId
}) => {
  const newUploadedHostelRequest = new UploadedHostelsRequestsEntity({
    userId,
    hostelId
  });
  await newUploadedHostelRequest.save();

  logger.info(
    `new uploaded hostel request added with data => \n${JSON.stringify(
      newUploadedHostelRequest.toJson(),
      undefined,
      6
    )}`
  );
};
