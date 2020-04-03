/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case here in index and inject it to the method wrapper
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */

const logger = require('../../../startup/logger');
const { ApplicationError } = require('../../../shared/errors');
const {
  REQUEST_RESPONSE,
  REQUEST_STATUS
} = require('../../../shared/constants/defaults');
const { ROOMS_STATUS } = require('../../../shared/constants/defaults');
const {
  getReservedRoomCountByHotels,
  isGroupBusyInDateTs
} = require('../../HostelReservation/hostel-reservation-external-use-cases');

const makeAddHostel = require('./add-hostel');
const makeAddHostelRooms = require('./add-hostel-rooms');
const makeHideHostel = require('./hide-hostel');
const makeUnhideHostel = require('./unhide-hostel');
const makeDeleteHostel = require('./delete-hostel');
const makeGetHostels = require('./get-hostels');
const makeGetRecommendedHostels = require('./get-recommended-hostels');
const makeEditHostel = require('./edit-hostel');
const makeEditHostelRooms = require('./edit-hostel-rooms');
const makeEditHostelAvailability = require('./edit-hostel-availability');
const makeGetHostel = require('./get-hostel');
const makeRateHostel = require('./rate-hostel');
const makeGetAvailabilityData = require('./get-Availability-data');
const {
  addUploadedHostelsRequests
} = require('../../uploadedHostelsRequests/uploadedHostelsRequests-external-use-cases');

const addHostel = makeAddHostel({
  ApplicationError,
  logger,
  addUploadedHostelsRequests,
  pending: REQUEST_STATUS.PENDING
});

const hideHostel = makeHideHostel({
  ApplicationError,
  logger
});

const unhideHostel = makeUnhideHostel({
  ApplicationError,
  logger
});

const addHostelRooms = makeAddHostelRooms({
  ApplicationError,
  logger
});

const deleteHostel = makeDeleteHostel({
  ApplicationError,
  logger
});

const getHostels = makeGetHostels({
  ApplicationError,
  logger,
  getReservedRoomCountByHotels,
  accepted: REQUEST_RESPONSE.ACCEPTED
});

const getRecommendedHostels = makeGetRecommendedHostels({
  ApplicationError,
  logger,
  getReservedRoomCountByHotels,
  accepted: REQUEST_RESPONSE.ACCEPTED
});

const getAvailabilityData = makeGetAvailabilityData({
  ApplicationError,
  logger,
  getReservedRoomCountByHotels
});

const editHostel = makeEditHostel({
  ApplicationError,
  logger
});

const editHostelRooms = makeEditHostelRooms({
  ApplicationError,
  logger,
  getReservedRoomCountByHotels
});

const editHostelAvailability = makeEditHostelAvailability({
  ApplicationError,
  logger,
  isGroupBusyInDateTs,
  roomsStatus: ROOMS_STATUS
});

const getHostel = makeGetHostel({
  ApplicationError,
  logger,
  getReservedRoomCountByHotels,
  accepted: REQUEST_RESPONSE.ACCEPTED
});

const rateHostel = makeRateHostel({
  ApplicationError,
  logger,
  accepted: REQUEST_RESPONSE.ACCEPTED
});

const hostelsUseCases = {
  addHostel,
  addHostelRooms,
  hideHostel,
  unhideHostel,
  deleteHostel,
  getHostels,
  getRecommendedHostels,
  getAvailabilityData,
  editHostel,
  editHostelRooms,
  editHostelAvailability,
  getHostel,
  rateHostel
};

module.exports = hostelsUseCases;
