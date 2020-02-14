const { defaultConstants } = require('../../../shared/constants');

const pagination = Object.values(defaultConstants.PAGINATION);

const makeAddHostelCtrl = require('./add-hostel');
const makeAddHostelRoomsCtrl = require('./add-hostel-rooms');
const makeHideHostelCtrl = require('./hide-hostel');
const makeUnhideHostelCtrl = require('./unhide-hostel');
const makeDeleteHostelCtrl = require('./delete-hostel');
const makeGetHostelsCtrl = require('./get-hostels');
const makeEditHostelCtrl = require('./edit-hostel');
const makeEditHostelAvailabilityCtrl = require('./edit-hostel-availability');
const makeGetHostelCtrl = require('./get-hostel');
const makeRateHostelCtrl = require('./rate-hostel');
// ->
const addHostel = makeAddHostelCtrl({});
const addHostelRooms = makeAddHostelRoomsCtrl({});
const hideHostel = makeHideHostelCtrl({});
const unhideHostel = makeUnhideHostelCtrl({});
const deleteHostel = makeDeleteHostelCtrl({});
const getHostels = makeGetHostelsCtrl({ pagination });
const editHostel = makeEditHostelCtrl({});
const editHostelAvailability = makeEditHostelAvailabilityCtrl({});
const getHostel = makeGetHostelCtrl({});
const ratehostel = makeRateHostelCtrl({});

const hostelsCtrl = Object.freeze({
  addHostel,
  addHostelRooms,
  hideHostel,
  unhideHostel,
  deleteHostel,
  getHostels,
  editHostel,
  editHostelAvailability,
  getHostel,
  ratehostel
});

module.exports = hostelsCtrl;
