/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case here in index and inject it to the method wrapper
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */

const _ = require('lodash');
const logger = require('../../../startup/logger');
const { ApplicationError } = require('../../../shared/errors');
const makeCreateEvent = require('./create-event');
const makeDeleteEvent = require('./delete-event');
const makeGetEvent = require('./get-event');
const makeGetEvents = require('./get-events');
const makeUpdateEvent = require('./update-event');
const makeMarkSeen = require('./mark-seen');
const makeMarkInteracted = require('./mark-interacted');
const {
  getUsersByPermissions
} = require('../../User/user-external-use-cases/');

const createEvent = makeCreateEvent({
  ApplicationError,
  logger,
  getUsersByPermissions,
  _
});

const deleteEvent = makeDeleteEvent({
  ApplicationError,
  logger
});

const getEvent = makeGetEvent({
  ApplicationError,
  logger
});

const getEvents = makeGetEvents({
  ApplicationError,
  logger
});

const updateEvent = makeUpdateEvent({
  logger,
  ApplicationError
});

const markSeen = makeMarkSeen({
  logger,
  ApplicationError
});

const markInteracted = makeMarkInteracted({
  logger,
  ApplicationError
});
const eventsUseCases = {
  createEvent,
  deleteEvent,
  updateEvent,
  getEvent,
  getEvents,
  markSeen,
  markInteracted
};

module.exports = eventsUseCases;
