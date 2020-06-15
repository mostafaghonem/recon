/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, logger }) => async ({
  officeId,
  name,
  images,
  numberOfPersons,
  Type,
  totalOffices,
  floorNumber,
  totalAvailableOffices,
  pricePerPerson,
  pricePer
}) => {
  const newOfficeOffices = {
    name,
    images,
    numberOfPersons,
    Type,
    totalOffices,
    floorNumber,
    totalAvailableOffices,
    pricePerPerson,
    pricePer
  };
  const filter = { _id: officeId, isArchived: false };
  const checkExistence = await model.exists({ filter });
  if (!checkExistence)
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا المكتب', 403);
  const update = {
    $push: { offices: newOfficeOffices }
  };
  await model.updateOneById({ id: officeId, update });

  logger.info(
    `new Office Offices just been added with data => \n${JSON.stringify(
      newOfficeOffices,
      undefined,
      6
    )}`
  );
};
