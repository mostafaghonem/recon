const makeUnitScheme = require('./UnitSchema');
const { defaultConstants } = require('../../../shared/constants');

const UnitState = Object.values(defaultConstants.UnitState);

module.exports = makeUnitScheme({
  requestStates: UnitState
});
