/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../models');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  getReservedRoomCountByHotels,
  getSimilarHostels,
  accepted
}) => async ({ hostelId, userId }) => {
  const query = { _id: hostelId, status: accepted, isArchived: false };
  const select =
    'name description image currency address isHidden freeServices generalServices hostelServices entertainmentServices foodServices rooms rate totalUsersRated';
  const checkExistence = await model.getOne({ query, select });
  if (!checkExistence)
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا الفندق', 403);
  const availableFrom = new Date().getTime();
  const availableTo = new Date().setDate(new Date().getDate() + 1);
  const getHostelReservation = await getReservedRoomCountByHotels(
    [hostelId],
    availableFrom,
    new Date(availableTo).getTime()
  );
  checkExistence.totalRooms = 0;
  checkExistence.totalAvailableRooms = 0;
  checkExistence.available = false;
  if (checkExistence.rooms[0]) {
    const getHostelData = getHostelReservation.filter(
      reservedHostel =>
        String(reservedHostel._id) === String(checkExistence._id)
    );
    checkExistence.rooms.forEach(group => {
      if (getHostelData[0]) {
        const getGroupData = getHostelData[0].rooms.filter(
          room => String(room.groupId) === String(group._id)
        );
        if (getGroupData[0]) {
          checkExistence.totalRooms += Number(group.totalRooms);
          checkExistence.totalAvailableRooms +=
            Number(group.totalRooms) -
            Number(getGroupData[0].totalReservedCount);
          group.availableRooms =
            Number(group.totalRooms) -
            Number(getGroupData[0].totalReservedCount);
          if (group.availableRooms > 0) {
            group.available = true;
            checkExistence.available = true;
          }
        }
      } else {
        checkExistence.totalRooms += Number(group.totalRooms);
        checkExistence.totalAvailableRooms += Number(group.totalAvailableRooms);
        group.availableRooms = Number(group.totalAvailableRooms);
        if (group.availableRooms > 0) {
          group.available = true;
          checkExistence.available = true;
        } else group.available = false;
      }
    });
  }
  checkExistence.similarHostels = [];

  const response = await getSimilarHostels({ checkExistence, userId });
  return response;
};
