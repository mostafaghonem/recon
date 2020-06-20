/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../models');

// should have no implementation for any specific orm

module.exports = ({
  moment,
  ApplicationError,
  logger,
  _,
  getReservedRoomCountByHotels
}) => async ({ hostelId, fromts, tots, rooms }) => {
  try {
    const numberOfNights = moment(tots).diff(moment(fromts), 'days');

    const query = {
      _id: hostelId,
      isArchived: false
    };
    const select = 'rooms';
    const checkExistence = await model.getOne({ query, select });

    if (!checkExistence) return false;
    if (rooms && _.isArray(rooms) && rooms.length !== 0) {
      const reservedHostels = await getReservedRoomCountByHotels(
        [hostelId],
        fromts,
        tots
      );
      let checkHostel = { rooms: [] };
      let allRoomsWereFound = true;
      let validAvailability = true;
      if (reservedHostels && reservedHostels.length !== 0)
        checkHostel = reservedHostels.filter(
          hostel => String(hostel._id) === String(hostelId)
        )[0] || { rooms: [] };
      let cost = 0;
      rooms.forEach(room => {
        const checkRoom =
          checkExistence.rooms.filter(
            group => String(group._id) === String(room.groupId)
          )[0] || null;
        if (!checkRoom) allRoomsWereFound = false;
        else {
          const checkRooms = checkHostel.rooms.filter(
            group => String(group.groupId) === String(room.groupId)
          )[0] || { totalReservedCount: 0 };
          const checkAvailability =
            Number(room.totalReservedCount) <=
            Number(checkRoom.totalRooms) -
              Number(checkRooms.totalReservedCount);
          if (!checkAvailability) validAvailability = false;
          else
            cost +=
              Number(room.totalReservedCount) *
              Number(checkRoom.pricePerPerson) *
              numberOfNights;
        }
      });
      if (allRoomsWereFound && validAvailability) return cost;
      return false;
    }

    return 0;
  } catch (error) {
    return false;
  }
};
