const makeOfficesScheme = require('./OfficesScheme');
const { defaultConstants } = require('../../../shared/constants');

const freeServices = Object.values(defaultConstants.OFFICEFREESERVICES);
const generalServices = Object.values(defaultConstants.OFFICEGENERALSERVICES);
const officeServices = Object.values(defaultConstants.OFFICESERVICES);
const entertainmentServices = Object.values(
  defaultConstants.OFFICEENTERTAINMENTSERVICES
);
const officesTypes = Object.values(defaultConstants.OFFICES_TYPES);
const pricePer = Object.values(defaultConstants.PRICE_PER);
const currencies = Object.values(defaultConstants.CURRENCIES);
const requestStatus = Object.values(defaultConstants.REQUEST_STATUS);
const pendingStatus = require('../../../shared/constants/defaults')
  .REQUEST_STATUS;

module.exports = makeOfficesScheme({
  freeServices,
  generalServices,
  officeServices,
  entertainmentServices,
  officesTypes,
  pricePer,
  currencies,
  requestStatus,
  pendingStatus: pendingStatus.PENDING
});
