/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../models');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  getReservedRoomCountByHotels,
  getHostelsFavorability,
  accepted
}) => async ({ checkExistence, userId }) => {
  let hostelsFavorability = {};
  const availableFrom = new Date().getTime();
  const availableTo = new Date().setDate(new Date().getDate() + 1);

  const filter = {
    _id: { $ne: checkExistence._id },
    status: accepted,
    'address.government': String(
      checkExistence.address.government
    ).toLowerCase(),
    $or: [
      {
        'address.government': String(
          checkExistence.address.government
        ).toLowerCase()
      },
      {
        'address.street': {
          $regex: new RegExp(checkExistence.address.street),
          $options: 'i'
        }
      },
      {
        'address.highlight': String(
          checkExistence.address.highlight
        ).toLowerCase()
      },
      {
        'address.nearTo': {
          $regex: new RegExp(checkExistence.address.nearTo),
          $options: 'i'
        }
      },
      {
        name: {
          $regex: new RegExp(checkExistence.name),
          $options: 'i'
        }
      },
      { freeServices: checkExistence.freeServices },
      {
        generalServices: checkExistence.generalServices
      },
      {
        hostelServices: checkExistence.hostelServices
      },
      {
        entertainmentServices: checkExistence.entertainmentServices
      },
      {
        foodServices: checkExistence.foodServices
      }
    ],
    isHidden: false,
    isArchived: false
  };
  const project = 'name image rate totalUsersRated rooms address.government';
  const sort = { updatedAt: -1 };
  let hostels = await model.getMany({
    query: filter,
    select: project,
    sort,
    skip: 0,
    limit: 4
  });
  if (userId) {
    const hostelsIds = hostels && hostels.length ? hostels.map(o => o._id) : [];
    hostelsFavorability = await getHostelsFavorability({
      userId,
      hostelsIds: [checkExistence._id, ...hostelsIds]
    });
    const favoriteExistance =
      hostelsFavorability[checkExistence._id.toString()];
    checkExistence.favorite = !!favoriteExistance;
    checkExistence.displayFavorite = true;
  }

  if (hostels && !hostels.length) {
    delete filter.$or;
    delete filter['address.government'];
    hostels = await model.getMany({
      query: filter,
      select: project,
      sort,
      skip: 0,
      limit: 4
    });
  }
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
      }
      hostel.favorite = !!hostelsFavorability[hostel._id.toString()];
      hostel.displayFavorite = true;
      checkExistence.similarHostels.push(hostel);
    });
  }

  return checkExistence;
};
