/* eslint-disable no-unused-vars */
//! only require Entity/model
const { UnitEntity } = require('../Entity');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  addUploadedUnitsRequests,
  createUnitEvent,
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
  const unit = {
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
    unit.status = 'accepted';
  }
  const newUnit = new UnitEntity(unit);
  if (user && user.permissions && !user.permissions.includes('admin')) {
    await addUploadedUnitsRequests({ userId, unitId: newUnit.id });
  }
  await newUnit.save();
  await createUnitEvent({
    userId,
    unitId: newUnit.id,
    unit: newUnit.toJson(),
    eventType: events.UNITS_REQUEST_ADD_UNIT
  });

  logger.info(
    `new Unit just been added with data => \n${JSON.stringify(
      newUnit.toJson(),
      undefined,
      6
    )}`
  );
  return newUnit.id;
};
