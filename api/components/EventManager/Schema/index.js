const makeEventScheme = require('./EventSchema');
const { defaultConstants } = require('../../../shared/constants');

const eventsTypes = Object.values(defaultConstants.EVENTS_TYPES);
const objectsTypes = Object.values(defaultConstants.OBJECTS_TYPES);
module.exports = makeEventScheme({
  eventsTypes,
  objectsTypes
});
