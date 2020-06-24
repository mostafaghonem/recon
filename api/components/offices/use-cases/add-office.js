/* eslint-disable no-unused-vars */
//! only require Entity/model
const { OfficesEntity } = require('../Entity');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  addUploadedOfficesRequests,
  pending
}) => async ({
  user,
  name,
  phone,
  email,
  managerEmail,
  description,
  image,
  currency,
  address = {
    government: String,
    street: String,
    nearTo: String,
    highlight: String,
    houseNumber: Number,
    apartmentNumber: Number,
    floorNumber: Number
  },
  freeServices,
  generalServices,
  officeServices,
  entertainmentServices
}) => {
  const userId = user.id;
  const office = {
    userId,
    name,
    phone,
    email,
    managerEmail,
    description,
    image,
    currency,
    address: {
      government: String(address.government).toLowerCase(),
      street: address.street,
      nearTo: address.nearTo,
      highlight: address.highlight,
      houseNumber: address.houseNumber,
      apartmentNumber: address.apartmentNumber,
      floorNumber: address.floorNumber
    },
    freeServices,
    generalServices,
    officeServices,
    entertainmentServices,
    status: pending
  };
  if (user && user.permissions && user.permissions.includes('admin')) {
    office.status = 'accepted';
  }
  const newOffice = new OfficesEntity(office);
  if (user && user.permissions && !user.permissions.includes('admin')) {
    await addUploadedOfficesRequests({ userId, officeId: newOffice.id });
  }
  await newOffice.save();

  logger.info(
    `new Office just been added with data => \n${JSON.stringify(
      newOffice.toJson(),
      undefined,
      6
    )}`
  );
  return newOffice.id;
};
