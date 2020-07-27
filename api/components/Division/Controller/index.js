const { defaultConstants } = require('../../../shared/constants');

const pagination = Object.freeze(defaultConstants.PAGINATION);

const makeAddDivisionCtrl = require('./add-division');
const makeDeleteDivisionCtrl = require('./delete-division');
const makeGetDivisionsCtrl = require('./get-divisions');
const makeHideDivisionCtrl = require('./hide-division');
const makeUnhideDivisionCtrl = require('./unhide-division');
const makeEditDivisionCtrl = require('./edit-division');
const makeGetDivision = require('./get-division');
// ->
const addDivision = makeAddDivisionCtrl({});
const deleteDivision = makeDeleteDivisionCtrl({});
const getDivisions = makeGetDivisionsCtrl({ pagination });
const hideDivision = makeHideDivisionCtrl({});
const unhideDivision = makeUnhideDivisionCtrl({});
const editDivision = makeEditDivisionCtrl({});
const getDivision = makeGetDivision({});

const divisionsCtrl = Object.freeze({
  addDivision,
  deleteDivision,
  hideDivision,
  unhideDivision,
  editDivision,
  getDivision,
  getDivisions
});

module.exports = divisionsCtrl;
