const { EditOfficesRequestsEntity } = require('../Entity');
const Models = require('../models');

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger }) => async ({
  userId,
  officeId,
  office
}) => {
  const filter = {
    userId,
    officeId,
    status: 'pending'
  };
  const update = {
    isArchived: true
  };
  await Models.updateManyByFilter({ filter, update });
  const newEditOfficeRequest = new EditOfficesRequestsEntity({
    userId,
    officeId,
    office
  });
  await newEditOfficeRequest.save();

  logger.info(
    `new edit office request added with data => \n${JSON.stringify(
      newEditOfficeRequest.toJson(),
      undefined,
      6
    )}`
  );
};
