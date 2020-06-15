/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case here in index and inject it to the method wrapper
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */

const logger = require('../../../startup/logger');
const { ApplicationError } = require('../../../shared/errors');
const {
  REQUEST_RESPONSE,
  REQUEST_STATUS
} = require('../../../shared/constants/defaults');
const { OFFICES_STATUS } = require('../../../shared/constants/defaults');
const {
  getReservedOfficeCountByOffices,
  isGroupBusyInDateTs
} = require('../../OfficeReservation/office-reservation-external-use-cases');

const {
  addEditOfficesRequests
} = require('../../editOfficesRequests/editOfficesRequests-external-use-cases');

const makeAddOffice = require('./add-office');
const makeAddOfficeOffices = require('./add-office-offices');
const makeHideOffice = require('./hide-office');
const makeUnhideOffice = require('./unhide-office');
const makeDeleteOffice = require('./delete-office');
const makeGetOffices = require('./get-offices');
const makeGetSimilarOffices = require('./get-similar-offices');
const makeGetRecommendedOffices = require('./get-recommended-offices');
const makeEditOffice = require('./edit-office');
const makeEditOfficeOffices = require('./edit-office-offices');
const makeEditOfficeAvailability = require('./edit-office-availability');
const makeGetOffice = require('./get-office');
const makeRateOffice = require('./rate-office');
const makeGetAvailabilityData = require('./get-Availability-data');
const {
  addUploadedOfficesRequests
} = require('../../uploadedOfficesRequests/uploadedOfficesRequests-external-use-cases');
const {
  getOfficesFavorability
} = require('../../User/user-external-use-cases');

const addOffice = makeAddOffice({
  ApplicationError,
  logger,
  addUploadedOfficesRequests,
  pending: REQUEST_STATUS.PENDING
});

const hideOffice = makeHideOffice({
  ApplicationError,
  logger
});

const unhideOffice = makeUnhideOffice({
  ApplicationError,
  logger
});

const addOfficeOffices = makeAddOfficeOffices({
  ApplicationError,
  logger
});

const deleteOffice = makeDeleteOffice({
  ApplicationError,
  logger
});

const getOffices = makeGetOffices({
  ApplicationError,
  logger,
  getReservedOfficeCountByOffices,
  getOfficesFavorability,
  accepted: REQUEST_RESPONSE.ACCEPTED
});

const getRecommendedOffices = makeGetRecommendedOffices({
  ApplicationError,
  logger,
  getReservedOfficeCountByOffices,
  getOfficesFavorability,
  accepted: REQUEST_RESPONSE.ACCEPTED
});

const getAvailabilityData = makeGetAvailabilityData({
  ApplicationError,
  logger,
  getReservedOfficeCountByOffices
});

const editOffice = makeEditOffice({
  ApplicationError,
  logger,
  addEditOfficesRequests
});

const editOfficeOffices = makeEditOfficeOffices({
  ApplicationError,
  logger,
  getReservedOfficeCountByOffices
});

const editOfficeAvailability = makeEditOfficeAvailability({
  ApplicationError,
  logger,
  isGroupBusyInDateTs,
  officesStatus: OFFICES_STATUS
});

const getSimilarOffices = makeGetSimilarOffices({
  ApplicationError,
  logger,
  getReservedOfficeCountByOffices,
  getOfficesFavorability,
  accepted: REQUEST_RESPONSE.ACCEPTED
});

const getOffice = makeGetOffice({
  ApplicationError,
  logger,
  getReservedOfficeCountByOffices,
  getOfficesFavorability,
  getSimilarOffices,
  accepted: REQUEST_RESPONSE.ACCEPTED
});

const rateOffice = makeRateOffice({
  ApplicationError,
  logger,
  accepted: REQUEST_RESPONSE.ACCEPTED
});

const officesUseCases = {
  addOffice,
  addOfficeOffices,
  hideOffice,
  unhideOffice,
  deleteOffice,
  getOffices,
  getRecommendedOffices,
  getAvailabilityData,
  editOffice,
  editOfficeOffices,
  editOfficeAvailability,
  getOffice,
  rateOffice,
  getSimilarOffices
};

module.exports = officesUseCases;
