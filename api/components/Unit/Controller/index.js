const { defaultConstants } = require('../../../shared/constants');

const pagination = Object.freeze(defaultConstants.PAGINATION);

const makeAddUnitCtrl = require('./add-unit');
const makeDeleteUnitCtrl = require('./delete-unit');
const makeGetUnitsCtrl = require('./get-units');
const makeGetMyUnitsCtrl = require('./get-my-units');
const makeGetMyUnitCtrl = require('./get-my-unit');
const makeHideUnitCtrl = require('./hide-unit');
const makeUnhideUnitCtrl = require('./unhide-unit');
const makeEditUnitCtrl = require('./edit-unit');
const makeGetUnit = require('./get-unit');
const makeExternalGetUnit = require('./external-get-unit');
const makeExternalGetUnitWithOwner = require('./external-get-unit-with-owner');
// const makeAddUnitRoomsCtrl = require('./add-unit-rooms');

// const makeGetUnitsCtrl = require('./get-units');
// const makeGetRecommendedUnitsCtrl = require('./get-recommended-units');

// const makeEditUnitAvailabilityCtrl = require('./edit-unit-availability');
// const makeGetUnitCtrl = require('./get-unit');
// const makeRateUnitCtrl = require('./rate-unit');
// ->
const addUnit = makeAddUnitCtrl({});
const deleteUnit = makeDeleteUnitCtrl({});
const getUnits = makeGetUnitsCtrl({ pagination });
const getMyUnits = makeGetMyUnitsCtrl({ pagination });
const getMyUnit = makeGetMyUnitCtrl({});
const hideUnit = makeHideUnitCtrl({});
const unhideUnit = makeUnhideUnitCtrl({});
const editUnit = makeEditUnitCtrl({});
const getUnit = makeGetUnit({});
const externalGetUnit = makeExternalGetUnit({});
const externalGetUnitWithOwner = makeExternalGetUnitWithOwner({});
// const getRecommendedUnits = makeGetRecommendedUnitsCtrl({ pagination });
// const editUnit = makeEditUnitCtrl({});
// const editUnitAvailability = makeEditUnitAvailabilityCtrl({});
// const getUnit = makeGetUnitCtrl({});
// const rateUnit = makeRateUnitCtrl({});

const unitsCtrl = Object.freeze({
  addUnit,
  deleteUnit,
  getMyUnits,
  getMyUnit,
  hideUnit,
  unhideUnit,
  editUnit,
  getUnit,
  externalGetUnit,
  externalGetUnitWithOwner,
  getUnits

  // getUnits,
  // getRecommendedUnits,
  // editUnit,
  // editUnitAvailability,
  // getUnit,
  // rateUnit
});

module.exports = unitsCtrl;
