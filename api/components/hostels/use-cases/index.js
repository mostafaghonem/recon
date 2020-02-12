/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case here in index and inject it to the method wrapper
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */

const logger = require('../../../startup/logger');
const { ApplicationError } = require('../../../shared/errors');

const makeAddHostel = require('./add-hostel');
const makeAddHostelRooms = require('./add-hostel-rooms');
const makeHideHostel = require('./hide-hostel');
const makeUnhideHostel = require('./unhide-hostel');
const makeDeleteHostel = require('./delete-hostel');
const {
  addUploadedHostelsRequests
} = require('../../uploadedHostelsRequests/uploadedHostelsRequests-external-use-cases');

const addHostel = makeAddHostel({
  ApplicationError,
  logger,
  addUploadedHostelsRequests
});

const hideHostel = makeHideHostel({
  ApplicationError,
  logger
});

const unhideHostel = makeUnhideHostel({
  ApplicationError,
  logger
});

const addHostelRooms = makeAddHostelRooms({
  ApplicationError,
  logger
});

const deleteHostel = makeDeleteHostel({
  ApplicationError,
  logger
});

const hostelsUseCases = {
  addHostel,
  addHostelRooms,
  hideHostel,
  unhideHostel,
  deleteHostel
};

module.exports = hostelsUseCases;
