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
  getReservedRoomCountByHotels,
  getHostelsFavorability,
  accepted
}) => async ({
  userId,
  lastId,
  availableFrom,
  availableTo,
  Type,
  government,
  numberOfPersons,
  freeServices,
  generalServices,
  hostelServices,
  entertainmentServices,
  foodServices,
  available,
  priceFrom,
  priceTo,
  rate,
  key,
  limit
}) => {
  let hostelsFavorability = {};
  const query = {
    _id: { $gt: lastId },
    name: { $regex: key, $options: 'i' },
    status: accepted,
    isHidden: false,
    isArchived: false
  };
  if (government)
    query['address.government'] = String(government).toLowerCase();
  if (freeServices) query.freeServices = { $all: freeServices };
  if (generalServices) query.generalServices = { $all: generalServices };
  if (hostelServices) query.hostelServices = { $all: hostelServices };
  if (entertainmentServices)
    query.entertainmentServices = { $all: entertainmentServices };
  if (foodServices) query.foodServices = { $all: foodServices };
  if (rate) query.rate = { $gte: Number(rate) };
  const select = 'name image rate totalUsersRated rooms address.government';
  const sort = { createdAt: 1 };
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
    const reservedHostels = await getReservedRoomCountByHotels(
      hostelsIds,
      availableFrom,
      availableTo
    );

    let filteredHostels = [];
    hostels.forEach(hostel => {
      hostel.totalRooms = 0;
      hostel.totalAvailableRooms = 0;
      hostel.available = false;
      hostel.rooms = hostel.rooms.filter(
        group =>
          group.numberOfPersons >= (Number(numberOfPersons) || 0) &&
          group.pricePerPerson >= (Number(priceFrom) || 0) &&
          group.pricePerPerson <= (Number(priceTo) || 10000000000)
      );
      if (Type)
        hostel.rooms = hostel.rooms.filter(
          group =>
            String(group.Type).toLowerCase() === String(Type).toLowerCase()
        );
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
    if (available)
      filteredHostels = filteredHostels.filter(hosetl => hosetl.available);

    if (userId) {
      hostelsFavorability = await getHostelsFavorability({
        userId,
        hostelsIds
      });

      filteredHostels = filteredHostels.map(o => {
        const displayFavorite = true;
        let favorite = false;

        if (hostelsFavorability[o._id.toString()]) {
          favorite = true;
        }
        return {
          ...JSON.parse(JSON.stringify(o)),
          favorite,
          displayFavorite
        };
      });
    }
    return filteredHostels;
  }
  return [];
};
