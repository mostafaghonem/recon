/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case here in index and inject it to the method wrapper
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */

const _ = require('lodash');
const moment = require('moment');
const logger = require('../../../startup/logger');
const { ApplicationError } = require('../../../shared/errors');
const {
  REQUEST_RESPONSE,
  EVENTS_TYPES,
  REQUEST_STATUS
} = require('../../../shared/constants/defaults');
const {
  GetSortObj,
  GetRecruitmentAreaFromAddress,
  CalculateReleaseDate
} = require('../../../shared/constants/methods');

const makeAddSoldier = require('./add-soldier');
const makeDeleteSoldier = require('./delete-soldier');
const makeGetSoldier = require('./get-soldier');
const makeGetSoldiers = require('./get-soldiers');
const makeHideSoldier = require('./hide-soldier');
const makeUnhideSoldier = require('./unhide-soldier');
const makeEditSoldier = require('./edit-soldier');

const addSoldier = makeAddSoldier({
  ApplicationError,
  logger,
  GetRecruitmentAreaFromAddress,
  CalculateReleaseDate,
  events: EVENTS_TYPES
});

const deleteSoldier = makeDeleteSoldier({
  ApplicationError,
  logger
});

const getSoldier = makeGetSoldier({
  moment,
  ApplicationError,
  logger,
  accepted: REQUEST_RESPONSE.ACCEPTED
});

const getSoldiers = makeGetSoldiers({
  _,
  moment,
  ApplicationError,
  logger,
  accepted: REQUEST_RESPONSE.ACCEPTED,
  GetSortObj
});

const hideSoldier = makeHideSoldier({
  ApplicationError,
  logger
});

const unhideSoldier = makeUnhideSoldier({
  ApplicationError,
  logger
});

const editSoldier = makeEditSoldier({
  ApplicationError,
  logger,
  events: EVENTS_TYPES,
  pending: REQUEST_STATUS.PENDING
});

const soldiersUseCases = {
  addSoldier,
  deleteSoldier,
  hideSoldier,
  unhideSoldier,
  editSoldier,
  getSoldier,
  getSoldiers
};

module.exports = soldiersUseCases;
