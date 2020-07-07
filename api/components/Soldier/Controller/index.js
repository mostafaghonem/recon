const { defaultConstants } = require('../../../shared/constants');

const pagination = Object.freeze(defaultConstants.PAGINATION);

const makeAddUnitCtrl = require('./add-soldier');
const makeDeleteUnitCtrl = require('./delete-soldier');
const makeGetUnitsCtrl = require('./get-units');
const makeHideUnitCtrl = require('./hide-unit');
const makeUnhideUnitCtrl = require('./unhide-unit');
const makeEditUnitCtrl = require('./edit-soldier');
const makeGetUnit = require('./get-unit');
// ->
const addUnit = makeAddUnitCtrl({});
const deleteUnit = makeDeleteUnitCtrl({});
const getUnits = makeGetUnitsCtrl({ pagination });
const hideUnit = makeHideUnitCtrl({});
const unhideUnit = makeUnhideUnitCtrl({});
const editUnit = makeEditUnitCtrl({});
const getUnit = makeGetUnit({});
// const editUnit = makeEditUnitCtrl({});
// const editUnitAvailability = makeEditUnitAvailabilityCtrl({});
// const getUnit = makeGetUnitCtrl({});
// const rateUnit = makeRateUnitCtrl({});

const unitsCtrl = Object.freeze({
  addUnit,
  deleteUnit,
  hideUnit,
  unhideUnit,
  editUnit,
  getUnit,
  getUnits
});

module.exports = unitsCtrl;
