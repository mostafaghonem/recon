/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case here in index and inject it to the method wrapper
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */

const logger = require('../../../startup/logger');
const { ApplicationError } = require('../../../shared/errors');
const { REQUEST_RESPONSE } = require('../../../shared/constants/defaults');
// const {
//     getReservedRoomCountByHotels,
//     isGroupBusyInDateTs
// } = require('../../UnitReservation/unit-reservation-external-use-cases');

const makeAddUnit = require('./add-unit');
const makeDeleteUnit = require('./delete-unit');
const makeGetMyUnits = require('./get-my-units');
const makeGetMyUnit = require('./get-my-unit');
// const makeAddUnitRooms = require('./add-unit-rooms');
// const makeHideUnit = require('./hide-unit');
// const makeUnhideUnit = require('./unhide-unit');
// const makeGetUnits = require('./get-units');
// const makeGetRecommendedUnits = require('./get-recommended-units');
// const makeEditUnit = require('./edit-unit');
// const makeEditUnitRooms = require('./edit-unit-rooms');
// const makeEditUnitAvailability = require('./edit-unit-availability');
// const makeGetUnit = require('./get-unit');
// const makeRateUnit = require('./rate-unit');
const {
  addUploadedUnitsRequests
} = require('../../UploadedUnitRequests/UploadedUnitsRequests-external-use-cases');

const addUnit = makeAddUnit({
  ApplicationError,
  logger,
  addUploadedUnitsRequests
});

const deleteUnit = makeDeleteUnit({
  ApplicationError,
  logger
});

const getMyUnits = makeGetMyUnits({
  ApplicationError
});

const getMyUnit = makeGetMyUnit({
  ApplicationError,
  accepted: REQUEST_RESPONSE.ACCEPTED
});

// const hideUnit = makeHideUnit({
//   ApplicationError,
//   logger
// });

// const unhideUnit = makeUnhideUnit({
//   ApplicationError,
//   logger
// });

// const addUnitRooms = makeAddUnitRooms({
//   ApplicationError,
//   logger
// });

// const getUnits = makeGetUnits({
//   ApplicationError,
//   logger,
//   getReservedRoomCountByHotels,
//   accepted: REQUEST_RESPONSE.ACCEPTED
// });

// const getRecommendedUnits = makeGetRecommendedUnits({
//   ApplicationError,
//   logger,
//   getReservedRoomCountByHotels,
//   accepted: REQUEST_RESPONSE.ACCEPTED
// });

// const editUnit = makeEditUnit({
//   ApplicationError,
//   logger
// });

// const editUnitRooms = makeEditUnitRooms({
//   ApplicationError,
//   logger
// });

// const editUnitAvailability = makeEditUnitAvailability({
//   ApplicationError,
//   logger,
//   isGroupBusyInDateTs,
//   roomsStatus: ROOMS_STATUS
// });

// const getUnit = makeGetUnit({
//   ApplicationError,
//   logger,
//   getReservedRoomCountByHotels,
//   accepted: REQUEST_RESPONSE.ACCEPTED
// });

// const rateUnit = makeRateUnit({
//   ApplicationError,
//   logger,
//   accepted: REQUEST_RESPONSE.ACCEPTED
// });

const unitsUseCases = {
  addUnit,
  deleteUnit,
  getMyUnits,
  getMyUnit
  //   addUnitRooms,
  //   hideUnit,
  //   unhideUnit,
  //   deleteUnit,
  //   getUnits,
  //   getRecommendedUnits,
  //   editUnit,
  //   editUnitRooms,
  //   editUnitAvailability,
  //   getUnit,
  //   rateUnit
};

module.exports = unitsUseCases;
