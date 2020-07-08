/* eslint-disable no-unused-vars */
//! only require Entity/model
const { SoldierEntity } = require('../Entity');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  addUploadedSoldiersRequests,
  createSoldierEvent,
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
  const soldier = {
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
    soldier.status = 'accepted';
  }
  const newSoldier = new SoldierEntity(soldier);
  if (user && user.permissions && !user.permissions.includes('admin')) {
    await addUploadedSoldiersRequests({ userId, soldierId: newSoldier.id });
  }
  await newSoldier.save();
  await createSoldierEvent({
    userId,
    soldierId: newSoldier.id,
    soldier: newSoldier.toJson(),
    eventType: events.UNITS_REQUEST_ADD_UNIT
  });

  logger.info(
    `new Soldier just been added with data => \n${JSON.stringify(
      newSoldier.toJson(),
      undefined,
      6
    )}`
  );
  return newSoldier.id;
};
