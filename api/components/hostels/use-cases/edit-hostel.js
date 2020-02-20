/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, logger }) => async ({
  userId,
  hostelId,
  name,
  phone,
  email,
  managerEmail,
  description,
  image,
  currency,
  address,
  freeServices,
  generalServices,
  hostelServices,
  entertainmentServices,
  foodServices
}) => {
  const filter = { _id: hostelId, userId, isArchived: false };
  const checkExistence = await model.exists({ filter });
  if (!checkExistence)
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا الفندق', 403);
  const update = {
    name,
    phone,
    email,
    managerEmail,
    description,
    image,
    currency,
    address,
    freeServices,
    generalServices,
    hostelServices,
    entertainmentServices,
    foodServices
  };
  await model.updateOneById({
    id: hostelId,
    update
  });

  logger.info(`${hostelId} Hostel updated Successfully`);
};
