const makeUnitScheme = require('./UnitSchema');
const { defaultConstants } = require('../../../shared/constants');

const unitTypes = Object.values(defaultConstants.UNIT_TYPES);
const unitServices = Object.values(defaultConstants.UNIT_SERVICES);
const rentersType = Object.values(defaultConstants.RENTERS_TYPES);

const currencies = Object.values(defaultConstants.CURRENCIES);
const requestStatus = Object.values(defaultConstants.REQUEST_STATUS);
const PricePer = Object.values(defaultConstants.PRICE_PER);
const pendingStatus = require('../../../shared/constants/defaults')
  .REQUEST_STATUS;

module.exports = makeUnitScheme({
  rentersType,
  unitTypes,
  PricePer,
  requestStatus,
  pendingStatus: pendingStatus.PENDING,
  currencies,
  unitServices
});
