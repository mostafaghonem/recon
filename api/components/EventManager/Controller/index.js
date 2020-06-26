const { defaultConstants } = require('../../../shared/constants');

const pagination = Object.freeze(defaultConstants.PAGINATION);

const makeAddEventCtrl = require('./create-event');
const makeDeleteEventCtrl = require('./delete-event');
const makeGetEvent = require('./get-event');
const makeGetEventsCtrl = require('./get-events');
const makeEditEventCtrl = require('./update-event');
const makeGetUnseen = require('./get-unseen');
const makeMarkSeen = require('./mark-seen');
const makeMarkInteracted = require('./mark-interacted');
const makeGetUnseenEventsCount = require('./get-unseen-events-count');

const createEvent = makeAddEventCtrl({});
const deleteEvent = makeDeleteEventCtrl({});
const getEvents = makeGetEventsCtrl({ pagination });
const updateEvent = makeEditEventCtrl({});
const getEvent = makeGetEvent({ pagination });
const getUnseen = makeGetUnseen({ pagination });
const markSeen = makeMarkSeen({});
const markInteracted = makeMarkInteracted({});
const getUnSeenEventsCount = makeGetUnseenEventsCount({ pagination });
const eventsCtrl = Object.freeze({
  createEvent,
  deleteEvent,
  updateEvent,
  getEvent,
  getEvents,
  getUnseen,
  markSeen,
  markInteracted,
  getUnSeenEventsCount
});

module.exports = eventsCtrl;
