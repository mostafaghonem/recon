/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../models');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  isGroupBusyInDateTs,
  officesStatus
}) => async ({ userId, officeId, groupId, totalRooms, status }) => {
  const query = {
    _id: officeId,
    userId,
    'offices._id': groupId,
    isArchived: false
  };
  const select = { offices: { $elemMatch: { _id: groupId } } };
  const checkExistence = await model.getOne({ query, select });
  if (!checkExistence)
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا المكتب', 403);

  let totalOnlineBookedRooms = 0;
  const checkOnlineBookings = await isGroupBusyInDateTs(
    [officeId],
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
  if (status === officesStatus.AVAILABLE) {
    allowedRoomsCount =
      checkExistence.offices[0].totalRooms -
      checkExistence.offices[0].totalAvailableRooms -
      Number(totalOnlineBookedRooms);
    totalAvailableRooms =
      checkExistence.offices[0].totalAvailableRooms + Number(totalRooms);
  } else {
    allowedRoomsCount =
      checkExistence.offices[0].totalAvailableRooms -
      Number(totalOnlineBookedRooms);
    totalAvailableRooms =
      checkExistence.offices[0].totalAvailableRooms - Number(totalRooms);
  }
  if (Number(totalRooms) > allowedRoomsCount)
    throw new ApplicationError(
      'لا يمكن ان يكون عدد الاماكن المتاحة اكبر من او يساوى العدد المسموح به',
      400
    );

  const filter = {
    _id: officeId,
    'offices._id': groupId
  };
  const update = {
    $set: {
      'offices.$.totalAvailableRooms': totalAvailableRooms
    }
  };
  await model.update({ filter, update });

  logger.info(
    `${groupId} group in ${officeId} Office Rooms availability updated Successfully`
  );
};
