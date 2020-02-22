/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../models');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  getReservedRoomCountByHotels,
  accepted
}) => async id => {
  const query = { _id: id, status: accepted, isArchived: false };
  const select =
    'name description image currency address freeServices generalServices hostelServices entertainmentServices foodServices rooms totalRate totalUsersRated';
  const checkExistence = await model.getOne({ query, select });
  if (!checkExistence)
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذا الفندق', 403);
  const availableFrom = new Date().getTime();
  const availableTo = new Date().setDate(new Date().getDate() + 1);
  const getHostelReservation = await getReservedRoomCountByHotels(
    [id],
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
  checkExistence.totalRate =
    checkExistence.totalRate / checkExistence.totalUsersRated || 0;
  checkExistence.similarHostels = [];

  const filter = {
    _id: { $ne: checkExistence._id },
    status: accepted,
    'address.government': checkExistence.address.government,
    isHidden: false,
    isArchived: false
  };
  const project = 'name totalRate totalUsersRated rooms address.government';
  const sort = { createdAt: 1 };
  const hostels = await model.getMany({
    query: filter,
    select: project,
    sort,
    skip: 0,
    limit: 4
  });
  if (hostels && hostels.length !== 0) {
    const hostelsIds = [];
    hostels.map(hostel => hostelsIds.push(hostel._id));
    const newAvailableFrom =
      new Date(availableFrom).getTime() || new Date().getTime();
    const newAvailableTo =
      availableTo || new Date().setDate(new Date().getDate() + 1);
    const reservedHostels = await getReservedRoomCountByHotels(
      hostelsIds,
      newAvailableFrom,
      new Date(newAvailableTo).getTime()
    );

    const filteredHostels = [];
    hostels.forEach(hostel => {
      hostel.totalRate = hostel.totalRate / hostel.totalUsersRated || 0;
      hostel.totalRooms = 0;
      hostel.totalAvailableRooms = 0;
      hostel.available = false;
      if (hostel.rooms[0]) {
        const getHostelData = reservedHostels.filter(
          reservedHostel => String(reservedHostel._id) === String(hostel._id)
        );
        hostel.rooms.forEach(group => {
          if (getHostelData[0]) {
            const getGroupData = getHostelData[0].rooms.filter(
              room => String(room.groupId) === String(group._id)
            );
            if (getGroupData[0]) {
              hostel.totalRooms += Number(group.totalRooms);
              hostel.totalAvailableRooms +=
                Number(group.totalRooms) -
                Number(getGroupData[0].totalReservedCount);
              group.availableRooms =
                Number(group.totalRooms) -
                Number(getGroupData[0].totalReservedCount);
              if (group.availableRooms > 0) {
                group.available = true;
                hostel.available = true;
              }
            }
          } else {
            hostel.totalRooms += Number(group.totalRooms);
            hostel.totalAvailableRooms += Number(group.totalAvailableRooms);
            group.availableRooms = Number(group.totalAvailableRooms);
            if (group.availableRooms > 0) {
              group.available = true;
              hostel.available = true;
            } else group.available = false;
          }
        });
      }
      checkExistence.similarHostels.push(hostel);
    });
  }
  return checkExistence;
};
