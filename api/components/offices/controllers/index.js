const { defaultConstants } = require('../../../shared/constants');

const pagination = Object.freeze(defaultConstants.PAGINATION);

const makeAddOfficeCtrl = require('./add-office');
const makeAddOfficeOfficesCtrl = require('./add-office-offices');
const makeHideOfficeCtrl = require('./hide-office');
const makeUnhideOfficeCtrl = require('./unhide-office');
const makeDeleteOfficeCtrl = require('./delete-offices');
const makeGetOfficesCtrl = require('./get-offices');
const makeGetRecommendedOfficesCtrl = require('./get-recommended-offices');
const makeEditOfficeCtrl = require('./edit-office');
const makeEditOfficeOfficesCtrl = require('./edit-office-offices');
const makeEditOfficeAvailabilityCtrl = require('./edit-office-availability');
const makeGetOfficeCtrl = require('./get-office');
const makeRateOfficeCtrl = require('./rate-office');
const makeGetAvailabilityData = require('./get-Availability-data');
// ->
const addOffice = makeAddOfficeCtrl({});
const addOfficeOffices = makeAddOfficeOfficesCtrl({});
const hideOffice = makeHideOfficeCtrl({});
const unhideOffice = makeUnhideOfficeCtrl({});
const deleteOffice = makeDeleteOfficeCtrl({});
const getOffices = makeGetOfficesCtrl({ pagination });
const getRecommendedOffices = makeGetRecommendedOfficesCtrl({ pagination });
const editOffice = makeEditOfficeCtrl({});
const editOfficeOffices = makeEditOfficeOfficesCtrl({});
const editOfficeAvailability = makeEditOfficeAvailabilityCtrl({});
const getOffice = makeGetOfficeCtrl({});
const rateoffice = makeRateOfficeCtrl({});
const getAvailabilityData = makeGetAvailabilityData({});

const officesCtrl = Object.freeze({
  addOffice,
  addOfficeOffices,
  hideOffice,
  unhideOffice,
  deleteOffice,
  getOffices,
  getRecommendedOffices,
  editOffice,
  editOfficeAvailability,
  getOffice,
  rateoffice,
  getAvailabilityData,
  editOfficeOffices
});

module.exports = officesCtrl;
