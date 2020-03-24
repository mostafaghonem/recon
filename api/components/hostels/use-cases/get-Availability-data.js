/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../models');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  getReservedRoomCountByHotels,
  accepted
}) => async ({ userId, hostelId, roomId }) => {
  const query = {
    _id: hostelId,
    'rooms._id': roomId,
    userId,
    isArchived: false
  };
  const select = { rooms: { $elemMatch: { _id: roomId } } };
  const checkExistence = await model.getOne({ query, select });
  console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  console.log(checkExistence);
  console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  if (!checkExistence)
    throw new ApplicationError(
      '. نأسف ، لا يمكننا العثور على هذا الفندق او هذه الغرفة',
      403
    );
  const availableFrom = new Date().getTime();
  const availableTo = new Date().setDate(new Date().getDate() + 1);
  const getHostelReservation = await getReservedRoomCountByHotels(
    [hostelId],
    availableFrom,
    new Date(availableTo).getTime()
  );
  checkExistence.totalRooms = 0;
  checkExistence.totalAvailableRooms = 0;
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
        }
      } else {
        checkExistence.totalRooms += Number(group.totalRooms);
        checkExistence.totalAvailableRooms += Number(group.totalAvailableRooms);
        group.availableRooms = Number(group.totalAvailableRooms);
      }
    });
    console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb');
    console.log(checkExistence);
    console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb');
    return checkExistence.rooms[0].availableRooms;
  }
  console.log('bbbbbbbbbb2bbbbbbbb');
  console.log(checkExistence);
  console.log('bbbbbbbbbb2bbbbbbbb');
  return 0;
};
