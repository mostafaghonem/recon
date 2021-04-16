const { defaultConstants, locations } = require('../../../shared/constants');
const {
  computeAppDrawer,
  processConstants
} = require('../../../shared/constants/methods');

const {
  getConstantsFromModel
} = require('../../Constant/Constant-external-use-cases');

const pagination = Object.freeze(defaultConstants.PAGINATION);

const makeAddStaffCtrl = require('./add-staff');
const makeDeleteStaffCtrl = require('./delete-staff');
const makeGetStaffsCtrl = require('./get-staffs');
const makeHideStaffCtrl = require('./hide-staff');
const makeUnhideStaffCtrl = require('./unhide-staff');
const makeEditStaffCtrl = require('./edit-staff');
const makeGetStaff = require('./get-staff');
// ->
const addStaff = makeAddStaffCtrl({});
const deleteStaff = makeDeleteStaffCtrl({});
const getStaffs = makeGetStaffsCtrl({ pagination });
const hideStaff = makeHideStaffCtrl({});
const unhideStaff = makeUnhideStaffCtrl({});
const editStaff = makeEditStaffCtrl({});
const getStaff = makeGetStaff({});
const staffsCtrl = Object.freeze({
  addStaff,
  deleteStaff,
  hideStaff,
  unhideStaff,
  editStaff,
  getStaff,
  getStaffs
});

module.exports = staffsCtrl;
