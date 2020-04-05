/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case here in index and inject it to the method wrapper
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */

const logger = require('../../../startup/logger');
const { ApplicationError } = require('../../../shared/errors');
const {
  REQUEST_RESPONSE,
  EVENTS_TYPES
} = require('../../../shared/constants/defaults');
const { GetSortObj } = require('../../../shared/constants/methods');

const makeAddUnit = require('./add-unit');
const makeDeleteUnit = require('./delete-unit');
const makeGetUnit = require('./get-unit');
const makeGetUnits = require('./get-units');
const makeGetMyUnits = require('./get-my-units');
const makeGetMyUnit = require('./get-my-unit');
const makeHideUnit = require('./hide-unit');
const makeUnhideUnit = require('./unhide-unit');
const makeSetFull = require('./set-full');
const makeSetNotFull = require('./set-not-full');
const makeEditUnit = require('./edit-unit');
const makeEditUnitRequest = require('./edit-unit-request');

// const makeAddUnitRooms = require('./add-unit-rooms');
// const makeHideUnit = require('./hide-unit');
// const makeUnhideUnit = require('./unhide-unit');
// const makeGetRecommendedUnits = require('./get-recommended-units');

// const makeEditUnitRooms = require('./edit-unit-rooms');
// const makeEditUnitAvailability = require('./edit-unit-availability');
// const makeGetUnit = require('./get-unit');
// const makeRateUnit = require('./rate-unit');
const {
  addUploadedUnitsRequests,
  editUploadedUnitsRequests
} = require('../../UploadedUnitRequests/UploadedUnitsRequests-external-use-cases');

const { createUnitEvent } = require('../UnitExternalUseCases');

const addUnit = makeAddUnit({
  ApplicationError,
  logger,
  addUploadedUnitsRequests,
  createUnitEvent,
  events: EVENTS_TYPES
});

const deleteUnit = makeDeleteUnit({
  ApplicationError,
  logger
});

const getUnit = makeGetUnit({
  ApplicationError,
  logger,
  accepted: REQUEST_RESPONSE.ACCEPTED
});

const getUnits = makeGetUnits({
  ApplicationError,
  logger,
  accepted: REQUEST_RESPONSE.ACCEPTED,
  GetSortObj
});

const getMyUnits = makeGetMyUnits({
  ApplicationError,
  GetSortObj
});

const getMyUnit = makeGetMyUnit({
  ApplicationError,
  accepted: REQUEST_RESPONSE.ACCEPTED
});

const hideUnit = makeHideUnit({
  ApplicationError,
  logger
});

const unhideUnit = makeUnhideUnit({
  ApplicationError,
  logger
});

const setFull = makeSetFull({
  ApplicationError,
  logger
});

const setNotFull = makeSetNotFull({
  ApplicationError,
  logger
});

const editUnit = makeEditUnit({
  ApplicationError,
  logger,
  createUnitEvent,
  events: EVENTS_TYPES
});

const editUnitRequest = makeEditUnitRequest({
  ApplicationError,
  logger,
  createUnitEvent,
  editUploadedUnitsRequests,
  events: EVENTS_TYPES
});

// const addUnitRooms = makeAddUnitRooms({
//   ApplicationError,
//   logger
// });

// const getRecommendedUnits = makeGetRecommendedUnits({
//   ApplicationError,
//   logger,
//   getReservedRoomCountByHotels,
//   accepted: REQUEST_RESPONSE.ACCEPTED
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
  getMyUnit,
  hideUnit,
  unhideUnit,
  editUnit,
  getUnit,
  getUnits,
  setFull,
  setNotFull,
  editUnitRequest
  //   addUnitRooms,
  //   deleteUnit,
  //   getRecommendedUnits,
  //   editUnit,
  //   editUnitRooms,
  //   editUnitAvailability,
  //   getUnit,
  //   rateUnit
};

module.exports = unitsUseCases;
