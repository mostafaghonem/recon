/* eslint-disable no-unused-vars */
//! only require Entity/model
const { UnitEntity } = require('../Entity');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  addUploadedUnitsRequests,
  accepted
}) => async ({
  userId,
  type,
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
  rentersType,
  numberOfPeople,
  numberOfRooms,
  hasFurniture,
  availableCountNow,
  pricePerPerson,
  dailyOrMonthly,
  highlight,
  availability = [],
  services = [],
  ownerTerms = [],
  gallery = [],
  status,
  reasonOfRefuse,
  totalOnlineBooking,
  totalRevenue,
  isHidden,
  isArchived
}) => {
  const newUnit = new UnitEntity({
    userId,
    type,
    description,
    image,
    currency,
    address,
    rentersType,
    numberOfPeople,
    numberOfRooms,
    hasFurniture,
    availableCountNow,
    pricePerPerson,
    dailyOrMonthly,
    highlight,
    availability,
    services,
    ownerTerms,
    gallery,
    reasonOfRefuse,
    totalOnlineBooking,
    totalRevenue,
    isHidden,
    isArchived,
    status: accepted
  });
  await newUnit.save();
  await addUploadedUnitsRequests({ userId, unitId: newUnit.id });

  logger.info(
    `new Unit just been added with data => \n${JSON.stringify(
      newUnit.toJson(),
      undefined,
      6
    )}`
  );
  return newUnit.id;
};
