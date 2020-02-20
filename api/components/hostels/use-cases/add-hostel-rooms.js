/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, logger }) => async ({
  hostelId,
  name,
  images,
  numberOfPersons,
  toilet,
  Type,
  totalRooms,
  floorNumber,
  totalAvailableRooms,
  pricePerPerson,
  pricePer
}) => {
  const newHostelRooms = {
    name,
    images,
    numberOfPersons,
    toilet,
    Type,
    totalRooms,
    floorNumber,
    totalAvailableRooms,
    pricePerPerson,
    pricePer
  };
  const filter = { _id: hostelId, isArchived: false };
  const checkExistence = await model.exists({ filter });
  if (!checkExistence)
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا الفندق', 403);
  const update = {
    $push: { rooms: newHostelRooms }
  };
  await model.updateOneById({ id: hostelId, update });

  logger.info(
    `new Hostel Rooms just been added with data => \n${JSON.stringify(
      newHostelRooms,
      undefined,
      6
    )}`
  );
};
