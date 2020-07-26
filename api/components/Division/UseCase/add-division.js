/* eslint-disable no-unused-vars */
//! only require Entity/model
const { DivisionEntity } = require('../Entity');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  addUploadedDivisionsRequests,
  createDivisionEvent,
  events
}) => async ({
  user,
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
  conditions = [],
  gallery = [],
  status,
  note,
  totalOnlineBooking,
  totalRevenue,
  isEditing,
  isFull,
  isHidden,
  isArchived
}) => {
  const userId = user.id;
  const division = {
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
    conditions,
    gallery,
    note,
    totalOnlineBooking,
    totalRevenue,
    isEditing,
    isFull,
    isHidden,
    isArchived
  };
  if (user && user.permissions && user.permissions.includes('admin')) {
    division.status = 'accepted';
  }
  const newDivision = new DivisionEntity(division);
  if (user && user.permissions && !user.permissions.includes('admin')) {
    await addUploadedDivisionsRequests({ userId, divisionId: newDivision.id });
  }
  await newDivision.save();
  await createDivisionEvent({
    userId,
    divisionId: newDivision.id,
    division: newDivision.toJson(),
    eventType: events.UNITS_REQUEST_ADD_UNIT
  });

  logger.info(
    `new Division just been added with data => \n${JSON.stringify(
      newDivision.toJson(),
      undefined,
      6
    )}`
  );
  return newDivision.id;
};
