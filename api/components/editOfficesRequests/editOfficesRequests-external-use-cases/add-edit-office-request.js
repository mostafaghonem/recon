const { EditOfficesRequestsEntity } = require('../Entity');
const Models = require('../models');

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger }) => async ({
  userId,
  hostelId,
  hostel
}) => {
  const filter = {
    userId,
    hostelId,
    status: 'pending'
  };
  const update = {
    isArchived: true
  };
  await Models.updateManyByFilter({ filter, update });
  const newEditOfficeRequest = new EditOfficesRequestsEntity({
    userId,
    hostelId,
    hostel
  });
  await newEditOfficeRequest.save();

  logger.info(
    `new edit hostel request added with data => \n${JSON.stringify(
      newEditOfficeRequest.toJson(),
      undefined,
      6
    )}`
  );
};
