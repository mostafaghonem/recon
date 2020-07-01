const makeUnitReservationScheme = require('./UnitReservationSchema');
const { defaultConstants } = require('../../../shared/constants');
const { PRICE_PER } = require('../../../shared/constants/defaults');

const unitReservationState = defaultConstants.UnitReservationState;
const PricePer = Object.values(PRICE_PER);
module.exports = makeUnitReservationScheme({
  requestStates: unitReservationState,
  PricePer
});
