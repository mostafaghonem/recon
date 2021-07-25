const { defaultConstants } = require('../../../shared/constants');

const pagination = Object.freeze(defaultConstants.PAGINATION);

const makeAddClearanceCtrl = require('./add-clearance');
const makeDeleteClearanceCtrl = require('./delete-clearance');
const makeGetClearancesCtrl = require('./get-clearances');
const makeEditClearanceCtrl = require('./edit-clearance');
const makeGetClearance = require('./get-clearance');

const addClearance = makeAddClearanceCtrl({});
const deleteClearance = makeDeleteClearanceCtrl({});
const getClearances = makeGetClearancesCtrl({ pagination });
const editClearance = makeEditClearanceCtrl({});
const getClearance = makeGetClearance({});
const clearancesCtrl = Object.freeze({
  addClearance,
  deleteClearance,
  editClearance,
  getClearance,
  getClearances
});

module.exports = clearancesCtrl;
