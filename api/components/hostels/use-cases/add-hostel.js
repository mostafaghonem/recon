/* eslint-disable no-unused-vars */
//! only require Entity/model
const { HostelsEntity } = require('../Entity');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  addUploadedHostelsRequests,
  accepted
}) => async ({
  userId,
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
  hostelServices,
  entertainmentServices,
  foodServices
}) => {
  const newHostel = new HostelsEntity({
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
    hostelServices,
    entertainmentServices,
    foodServices,
    status: accepted
  });
  await newHostel.save();
  await addUploadedHostelsRequests({ userId, hostelId: newHostel.id });

  logger.info(
    `new Hostel just been added with data => \n${JSON.stringify(
      newHostel.toJson(),
      undefined,
      6
    )}`
  );
  return newHostel.id;
};
