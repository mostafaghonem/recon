const makeAddHostelCtrl = require('./add-hostel');
const makeAddHostelRoomsCtrl = require('./add-hostel-rooms');
const makeHideHostelCtrl = require('./hide-hostel');
const makeUnhideHostelCtrl = require('./unhide-hostel');
const makeDeleteHostelCtrl = require('./delete-hostel');
// ->
const addHostel = makeAddHostelCtrl({});
const addHostelRooms = makeAddHostelRoomsCtrl({});
const hideHostel = makeHideHostelCtrl({});
const unhideHostel = makeUnhideHostelCtrl({});
const deleteHostel = makeDeleteHostelCtrl({});

const hostelsCtrl = Object.freeze({
  addHostel,
  addHostelRooms,
  hideHostel,
  unhideHostel,
  deleteHostel
});

module.exports = hostelsCtrl;
