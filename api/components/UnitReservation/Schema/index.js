const makeUnitReservationScheme = require('./UnitReservationSchema');
const { defaultConstants } = require('../../../shared/constants');

const unitReservationState = defaultConstants.UnitReservationState;

module.exports = makeUnitReservationScheme({
  requestStates: unitReservationState
});
