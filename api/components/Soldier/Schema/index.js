const makeSoldierScheme = require('./SoldierSchema');
const { defaultConstants } = require('../../../shared/constants');

const soldierTypes = Object.values(defaultConstants.UNIT_TYPES);
const soldierServices = Object.values(defaultConstants.UNIT_SERVICES);
const rentersType = Object.values(defaultConstants.RENTERS_TYPES);

const currencies = Object.values(defaultConstants.CURRENCIES);
const requestStatus = Object.values(defaultConstants.REQUEST_STATUS);
const PricePer = Object.values(defaultConstants.PRICE_PER);
const pendingStatus = require('../../../shared/constants/defaults')
  .REQUEST_STATUS;

module.exports = makeSoldierScheme({
  rentersType,
  soldierTypes,
  PricePer,
  requestStatus,
  pendingStatus: pendingStatus.PENDING,
  currencies,
  soldierServices
});
