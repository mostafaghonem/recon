const { defaultConstants } = require('../../../shared/constants');

const pagination = Object.freeze(defaultConstants.PAGINATION);

const makeAddUnitCtrl = require('./add-unit');
const makeDeleteUnitCtrl = require('./delete-unit');
const makeGetMyUnitsCtrl = require('./get-my-units');
const makeGetMyUnitCtrl = require('./get-my-unit');
// const makeAddUnitRoomsCtrl = require('./add-unit-rooms');
// const makeHideUnitCtrl = require('./hide-unit');
// const makeUnhideUnitCtrl = require('./unhide-unit');
// const makeGetUnitsCtrl = require('./get-units');
// const makeGetRecommendedUnitsCtrl = require('./get-recommended-units');
// const makeEditUnitCtrl = require('./edit-unit');
// const makeEditUnitAvailabilityCtrl = require('./edit-unit-availability');
// const makeGetUnitCtrl = require('./get-unit');
// const makeRateUnitCtrl = require('./rate-unit');
// ->
const addUnit = makeAddUnitCtrl({});
const deleteUnit = makeDeleteUnitCtrl({});
const getMyUnits = makeGetMyUnitsCtrl({ pagination });
const getMyUnit = makeGetMyUnitCtrl({});
// const hideUnit = makeHideUnitCtrl({});
// const unhideUnit = makeUnhideUnitCtrl({});
// const getUnits = makeGetUnitsCtrl({ pagination });
// const getRecommendedUnits = makeGetRecommendedUnitsCtrl({ pagination });
// const editUnit = makeEditUnitCtrl({});
// const editUnitAvailability = makeEditUnitAvailabilityCtrl({});
// const getUnit = makeGetUnitCtrl({});
// const rateUnit = makeRateUnitCtrl({});

const unitsCtrl = Object.freeze({
  addUnit,
  deleteUnit,
  getMyUnits,
  getMyUnit
  // hideUnit,
  // unhideUnit,
  // deleteUnit,
  // getUnits,
  // getRecommendedUnits,
  // editUnit,
  // editUnitAvailability,
  // getUnit,
  // rateUnit
});

module.exports = unitsCtrl;
