const model = require('../models');

/**
 * @description check user login data and return login token if user is exist and verified
 * @param {Object} of {String} phone, {String} password, {String} agent
 * @returns {token} if user found or {error} if not
 * @memberof use-cases
 */

// should have no implementation for any specific orm
module.exports = ({
  ApplicationError,
  logger,
  getReservedRoomCountByHotels
}) => async ({ userId, lastId, status, key, limit }) => {
  const query = {
    _id: { $gt: lastId },
    name: { $regex: key, $options: 'i' },
    userId,
    status,
    isArchived: false
  };
  const select =
    'name image status currency address rooms rate totalUsersRated totalOnlineBooking totalBooking totalRevenue note';
  let sort = { createdAt: 1 };
  if (status !== 'pending') sort = { updatedAt: -1 };
  const hostels = await model.getMany({
    query,
    select,
    sort,
    skip: 0,
    limit
  });

  if (hostels && hostels.length !== 0) {
    const hostelsIds = [];
    hostels.map(hostel => hostelsIds.push(hostel._id));
    const availableFrom = new Date().getTime();
    const availableTo = new Date().setDate(new Date().getDate() + 1);
    const reservedHostels = await getReservedRoomCountByHotels(
      hostelsIds,
      availableFrom,
      new Date(availableTo).getTime()
    );
    hostels.forEach(hostel => {
      if (hostel.status === 'accepted') {
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
              if (group.availableRooms > 0) hostel.available = true;
            }
          });
        }
      } else {
        hostel.totalRooms = 0;
        hostel.totalAvailableRooms = 0;
        hostel.available = false;
      }
    });
  }

  return hostels;
};
