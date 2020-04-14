/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../models');

function compare(oldData, newData) {
  let change = false;
  Object.keys(newData).forEach(key => {
    if (String(newData[key]) !== String(oldData[key])) change = true;
    if (key === 'address') {
      Object.keys(newData.address).forEach(addressKey => {
        if (
          String(newData.address[addressKey]) !==
          String(oldData.address[addressKey])
        )
          change = true;
      });
    }
  });
  return change;
}

module.exports = ({
  ApplicationError,
  logger,
  addEditHostelsRequests
}) => async ({
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
  const select =
    'name phone email managerEmail description image currency address freeServices generalServices hostelServices entertainmentServices foodServices';
  const checkExistence = await model.getOne({ query: filter });
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
  const checkChange = compare(checkExistence, update);
  if (checkChange)
    await addEditHostelsRequests({ userId, hostelId, hostel: update });
  else
    await model.updateOneById({
      id: hostelId,
      update
    });

  logger.info(`${hostelId} Hostel updated Successfully`);
};
