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
  addEditOfficesRequests
}) => async ({
  userId,
  officeId,
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
  officeServices,
  entertainmentServices
}) => {
  console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  console.log(officeId);
  console.log(userId);
  console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  const filter = { _id: officeId, userId, isArchived: false };
  const select =
    'name phone email managerEmail description image currency address freeServices generalServices officeServices entertainmentServices';
  const checkExistence = await model.getOne({ query: filter });
  if (!checkExistence)
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا المكتب', 403);

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
    officeServices,
    entertainmentServices
  };
  const checkChange = compare(checkExistence, update);
  if (checkChange)
    await addEditOfficesRequests({ userId, officeId, office: update });
  else
    await model.updateOneById({
      id: officeId,
      update
    });

  logger.info(`${officeId} Office updated Successfully`);
};
