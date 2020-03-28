const { defaultConstants } = require('../../../shared/constants');

const pagination = Object.freeze(defaultConstants.PAGINATION);

const makeAddEventCtrl = require('./create-event');
const makeDeleteEventCtrl = require('./delete-event');
const makeGetEvent = require('./get-event');
const makeGetEventsCtrl = require('./get-events');
const makeEditEventCtrl = require('./update-event');

const createEvent = makeAddEventCtrl({});
const deleteEvent = makeDeleteEventCtrl({});
const getEvents = makeGetEventsCtrl({ pagination });
const updateEvent = makeEditEventCtrl({});
const getEvent = makeGetEvent({});

const eventsCtrl = Object.freeze({
  createEvent,
  deleteEvent,
  updateEvent,
  getEvent,
  getEvents
});

module.exports = eventsCtrl;
