const Model = require('../models/UserFavoriteHostelsIndex');

// eslint-disable-next-line no-unused-vars
module.exports = ({
  moment,
  ApplicationError,
  GetSearchObj,
  GetSortObj,
  getReservedRoomCountByHotels
}) => async ({ userId, sortIndex, sortKey, sortValue, limit, key }) => {
  const availableFrom = moment().toDate();
  const availableTo = moment()
    .add(2, 'day')
    .toDate();
  if (!userId) throw new ApplicationError('You should pass userId');
  const sortObj = GetSortObj({
    sortIndex,
    sortKey,
    sortValue
  });
  const rest = sortObj.query[0] || sortObj.query;
  const searchObj = GetSearchObj({ key });
  const objectRest = searchObj ? { $or: searchObj } : {};
  const results = await Model.getFavouriteHostels(
    userId,
    limit,
    rest,
    sortObj,
    objectRest
  );
  if (results.data && results.data.length) {
    const hostels = results.data
      .filter(o => o.hostelId)
      .map(o => ({
        ...o.hostelId._doc,
        favorite_id: o._id,
        favorite: o.favorite,
        displayFavorite: true
      }));
    const hostelsIds = [];
    hostels.map(hostel => hostelsIds.push(hostel._id));
    const reservedHostels = await getReservedRoomCountByHotels(
      hostelsIds,
      availableFrom,
      availableTo
    );

    const filteredHostels = [];
    hostels.forEach(hostel => {
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
        filteredHostels.push(hostel);
      }
    });
    return {
      hasNext: results.hasNext,
      total: results.total,
      data: filteredHostels
    };
  }
  return results;
};
