const makeHostelsScheme = require('./HostelsScheme');
const { defaultConstants } = require('../../../shared/constants');

const freeServices = Object.values(defaultConstants.FREESERVICES);
const generalServices = Object.values(defaultConstants.GENERALSERVICES);
const hostelServices = Object.values(defaultConstants.HOSTELSERVICES);
const entertainmentServices = Object.values(
  defaultConstants.ENTERTAINMENTSERVICES
);
const foodServices = Object.values(defaultConstants.FOODSERVICES);
const toiletTypes = Object.values(defaultConstants.TOILET_TYPES);
const roomsTypes = Object.values(defaultConstants.ROOMS_TYPES);
const pricePer = Object.values(defaultConstants.PRICE_PER);
const currencies = Object.values(defaultConstants.CURRENCIES);
const requestStatus = Object.values(defaultConstants.REQUEST_STATUS);
const pendingStatus = require('../../../shared/constants/defaults')
  .REQUEST_STATUS;

module.exports = makeHostelsScheme({
  freeServices,
  generalServices,
  hostelServices,
  entertainmentServices,
  foodServices,
  toiletTypes,
  roomsTypes,
  pricePer,
  currencies,
  requestStatus,
  pendingStatus: pendingStatus.PENDING
});
