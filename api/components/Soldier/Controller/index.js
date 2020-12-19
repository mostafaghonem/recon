const { defaultConstants, locations } = require('../../../shared/constants');
const {
  computeAppDrawer,
  processConstants
} = require('../../../shared/constants/methods');

const {
  getConstantsFromModel
} = require('../../Constant/Constant-external-use-cases');

const pagination = Object.freeze(defaultConstants.PAGINATION);

const makeAddSoldierCtrl = require('./add-soldier');
const makeDeleteSoldierCtrl = require('./delete-soldier');
const makeGetSoldiersCtrl = require('./get-soldiers');
const makeHideSoldierCtrl = require('./hide-soldier');
const makeUnhideSoldierCtrl = require('./unhide-soldier');
const makeEditSoldierCtrl = require('./edit-soldier');
const makeGetSoldier = require('./get-soldier');
const makeGetConstants = require('./get-constants');
// ->
const addSoldier = makeAddSoldierCtrl({});
const deleteSoldier = makeDeleteSoldierCtrl({});
const getSoldiers = makeGetSoldiersCtrl({ pagination });
const hideSoldier = makeHideSoldierCtrl({});
const unhideSoldier = makeUnhideSoldierCtrl({});
const editSoldier = makeEditSoldierCtrl({});
const getSoldier = makeGetSoldier({});
const getConstants = makeGetConstants({
  locations,
  defaultConstants,
  computeAppDrawer,
  processConstants,

  constantTypes: defaultConstants.CONSTANT_TYPES,
  getConstantsFromModel
});

const soldiersCtrl = Object.freeze({
  addSoldier,
  deleteSoldier,
  hideSoldier,
  unhideSoldier,
  editSoldier,
  getSoldier,
  getSoldiers,
  getConstants
});

module.exports = soldiersCtrl;
