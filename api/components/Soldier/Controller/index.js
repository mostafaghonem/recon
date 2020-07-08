const { defaultConstants } = require('../../../shared/constants');

const pagination = Object.freeze(defaultConstants.PAGINATION);

const makeAddSoldierCtrl = require('./add-soldier');
const makeDeleteSoldierCtrl = require('./delete-soldier');
const makeGetSoldiersCtrl = require('./get-soldiers');
const makeHideSoldierCtrl = require('./hide-soldier');
const makeUnhideSoldierCtrl = require('./unhide-soldier');
const makeEditSoldierCtrl = require('./edit-soldier');
const makeGetSoldier = require('./get-soldier');
// ->
const addSoldier = makeAddSoldierCtrl({});
const deleteSoldier = makeDeleteSoldierCtrl({});
const getSoldiers = makeGetSoldiersCtrl({ pagination });
const hideSoldier = makeHideSoldierCtrl({});
const unhideSoldier = makeUnhideSoldierCtrl({});
const editSoldier = makeEditSoldierCtrl({});
const getSoldier = makeGetSoldier({});
// const editSoldier = makeEditSoldierCtrl({});
// const editSoldierAvailability = makeEditSoldierAvailabilityCtrl({});
// const getSoldier = makeGetSoldierCtrl({});
// const rateSoldier = makeRateSoldierCtrl({});

const soldiersCtrl = Object.freeze({
  addSoldier,
  deleteSoldier,
  hideSoldier,
  unhideSoldier,
  editSoldier,
  getSoldier,
  getSoldiers
});

module.exports = soldiersCtrl;
