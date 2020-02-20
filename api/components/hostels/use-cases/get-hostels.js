const model = require('../models');

/**
 * @description check user login data and return login token if user is exist and verified
 * @param {Object} of {String} phone, {String} password, {String} agent
 * @returns {token} if user found or {error} if not
 * @memberof use-cases
 */

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger, accepted }) => async ({
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
  const query = {
    _id: { $gt: lastId },
    name: { $regex: key, $options: 'i' },
    'address.government': government,
    status: accepted,
    isHidden: false,
    isArchived: false
  };
  if (freeServices) query.freeServices = { $all: freeServices };
  if (generalServices) query.generalServices = { $all: generalServices };
  if (hostelServices) query.hostelServices = { $all: hostelServices };
  if (entertainmentServices)
    query.entertainmentServices = { $all: entertainmentServices };
  if (foodServices) query.foodServices = { $all: foodServices };
  if (rate) query.rate = { $gte: Number(rate) };
  const select = 'name totalRate totalUsersRated rooms address.government';
  const sort = { createdAt: 1 };
  const hostels = await model.getMany({
    query,
    select,
    sort,
    skip: 0,
    limit
  });
  // TODO call booking service from gamal component
  const reservedHostels = [
    {
      _id: '5e44320a95ca3102123939a5',
      rooms: [
        {
          groupId: '5e45c0e12d91ae00edc575e0',
          roomType: 'single',
          totalReservedCount: 7
        },
        {
          groupId: '5e45c0e12d91ae00edc575e1',
          roomType: 'single',
          totalReservedCount: 6
        },
        {
          groupId: '5e45c0e12d91ae00edc575e2',
          roomType: 'double',
          totalReservedCount: 6
        }
      ]
    },
    {
      _id: '5e44321a95ca3102123939a6',
      rooms: [
        {
          groupId: '5e45c0f62d91ae00edc575e1',
          roomType: 'single',
          totalReservedCount: 6
        }
      ]
    },
    {
      _id: '5e444a95934ff8034d521fcb',
      rooms: [
        {
          groupId: '5e45c1012d91ae00edc575e2',
          roomType: 'single',
          totalReservedCount: 6
        },
        {
          groupId: '5e45c1012d91ae00edc575e3',
          roomType: 'single',
          totalReservedCount: 10
        }
      ]
    }
  ];
  let filteredHostels = [];
  hostels.forEach(hostel => {
    hostel.totalRooms = 0;
    hostel.totalAvailableRooms = 0;
    hostel.available = false;
    hostel.rooms = hostel.rooms.filter(
      group =>
        group.Type === Type &&
        group.numberOfPersons >= (Number(numberOfPersons) || 0) &&
        group.pricePerPerson >= (Number(priceFrom) || 0) &&
        group.pricePerPerson <= (Number(priceTo) || 10000000000)
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
          hostel.totalAvailableRooms += Number(group.totalRooms);
          group.availableRooms = Number(group.totalRooms);
          group.available = false;
        }
      });
      filteredHostels.push(hostel);
    }
  });
  if (available)
    filteredHostels = filteredHostels.filter(hosetl => hosetl.available);

  return filteredHostels;
};
