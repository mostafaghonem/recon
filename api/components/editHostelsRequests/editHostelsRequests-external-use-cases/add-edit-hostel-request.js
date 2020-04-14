const { EditHostelsRequestsEntity } = require('../Entity');
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
  const newEditHostelRequest = new EditHostelsRequestsEntity({
    userId,
    hostelId,
    hostel
  });
  await newEditHostelRequest.save();

  logger.info(
    `new edit hostel request added with data => \n${JSON.stringify(
      newEditHostelRequest.toJson(),
      undefined,
      6
    )}`
  );
};
