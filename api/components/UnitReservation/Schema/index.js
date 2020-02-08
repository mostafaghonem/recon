const makeUnitReservationScheme = require('./UnitReservationSchema');
const { defaultConstants } = require('../../../shared/constants');

const unitReservationState = Object.values(
  defaultConstants.UnitReservationState
);

module.exports = makeUnitReservationScheme({
  requestStates: unitReservationState
});
