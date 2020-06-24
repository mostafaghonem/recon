/* eslint-disable no-unused-vars */
//! only require Entity/model
const { HostelsEntity } = require('../Entity');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  addUploadedHostelsRequests,
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
  hostelServices,
  entertainmentServices,
  foodServices
}) => {
  const userId = user.id;
  const hostel = {
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
    status: pending
  };
  if (user && user.permissions && user.permissions.includes('admin')) {
    hostel.status = 'accepted';
  }
  const newHostel = new HostelsEntity(hostel);
  if (user && user.permissions && !user.permissions.includes('admin')) {
    await addUploadedHostelsRequests({ userId, hostelId: newHostel.id });
  }
  await newHostel.save();

  logger.info(
    `new Hostel just been added with data => \n${JSON.stringify(
      newHostel.toJson(),
      undefined,
      6
    )}`
  );
  return newHostel.id;
};
