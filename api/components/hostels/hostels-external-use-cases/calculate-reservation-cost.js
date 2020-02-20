/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../models');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  getReservedRoomCountByHotels
}) => async ({ hostelId, fromts, tots, totalReservedCount, roomId }) => {
  const response = {
    success: false,
    canBook: false,
    cost: 0
  };
  try {
    const query = {
      _id: hostelId,
      'rooms._id': roomId,
      isArchived: false
    };
    const select = { rooms: { $elemMatch: { _id: roomId } } };
    const checkExistence = await model.getOne({ query, select });
    if (checkExistence) {
      let totalOnlineRooms = 0;
      const reservedHostels = await getReservedRoomCountByHotels(
        [hostelId],
        fromts,
        tots
      );

      if (reservedHostels && reservedHostels.length !== 0) {
        const checkHostel = reservedHostels.filter(
          hostel => String(hostel._id) === String(hostelId)
        );
        if (checkHostel[0]) {
          const checkRooms = checkHostel[0].rooms.filter(
            group => String(group.groupId) === String(roomId)
          );
          if (checkRooms[0])
            totalOnlineRooms += checkRooms[0].totalReservedCount;
        }
      }
      if (
        Number(totalReservedCount) <=
        Number(checkExistence.rooms[0].totalAvailableRooms) -
          Number(totalOnlineRooms)
      ) {
        response.success = true;
        response.canBook = true;
        response.cost =
          Number(totalReservedCount) * checkExistence.rooms[0].pricePerPerson;
      }
    }
  } catch (error) {
    response.success = error.message;
  }

  return response;
};
