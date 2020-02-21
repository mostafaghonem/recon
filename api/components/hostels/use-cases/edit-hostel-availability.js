/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../models');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  isGroupBusyInDateTs,
  roomsStatus
}) => async ({ userId, hostelId, groupId, totalRooms, status }) => {
  const query = {
    _id: hostelId,
    userId,
    'rooms._id': groupId,
    isArchived: false
  };
  const select = { rooms: { $elemMatch: { _id: groupId } } };
  const checkExistence = await model.getOne({ query, select });
  if (!checkExistence)
    throw new ApplicationError(
      '.نأسف ، لا يمكننا العثور على هذا الفندق او هذة الغرف',
      403
    );

  let totalOnlineBookedRooms = 0;
  const checkOnlineBookings = await isGroupBusyInDateTs(
    [hostelId],
    [groupId],
    new Date().getTime()
  );
  if (checkOnlineBookings[0]) {
    const checkGroup = checkOnlineBookings.filter(
      group => String(group._id) === String(groupId)
    );
    if (checkGroup[0])
      totalOnlineBookedRooms = Number(checkGroup[0].totalReservedCount) || 0;
  }
  let totalAvailableRooms = 0;
  let allowedRoomsCount = 0;
  if (status === roomsStatus.AVAILABLE) {
    allowedRoomsCount =
      checkExistence.rooms[0].totalRooms -
      checkExistence.rooms[0].totalAvailableRooms -
      Number(totalOnlineBookedRooms);
    totalAvailableRooms =
      checkExistence.rooms[0].totalAvailableRooms + Number(totalRooms);
  } else {
    allowedRoomsCount =
      checkExistence.rooms[0].totalAvailableRooms -
      Number(totalOnlineBookedRooms);
    totalAvailableRooms =
      checkExistence.rooms[0].totalAvailableRooms - Number(totalRooms);
  }
  if (Number(totalRooms) > allowedRoomsCount)
    throw new ApplicationError(
      'لا يمكن ان يكون عدد الاماكن المتاحة اكبر من او يساوى العدد المسموح به',
      400
    );

  const filter = {
    _id: hostelId,
    'rooms._id': groupId
  };
  const update = {
    $set: {
      'rooms.$.totalAvailableRooms': totalAvailableRooms
    }
  };
  await model.update({ filter, update });

  logger.info(
    `${groupId} group in ${hostelId} Hostel Rooms availability updated Successfully`
  );
};
