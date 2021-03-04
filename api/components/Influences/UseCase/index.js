/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case here in index and inject it to the method wrapper
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */

const moment = require('moment');
const logger = require('../../../startup/logger');
const { ApplicationError, ErrorText } = require('../../../shared/errors');
const {
  REQUEST_RESPONSE,
  EVENTS_TYPES,
  REQUEST_STATUS
} = require('../../../shared/constants/defaults');
const { GetSortObj } = require('../../../shared/constants/methods');

const {
  getSoldierById,
  addSoldierInfluence
} = require('../../Soldier/Soldier-external-use-cases');
const makeAddInfluence = require('./add-influence');
const makeDeleteInfluence = require('./delete-influence');
const makeGetInfluence = require('./get-influence');
const makeGetInfluences = require('./get-influences');
const makeHideInfluence = require('./hide-influence');
const makeUnhideInfluence = require('./unhide-influence');
const makeEditInfluence = require('./edit-influence');

const addInfluence = makeAddInfluence({
  getSoldierById,
  addSoldierInfluence,
  ErrorText,
  ApplicationError,
  logger,
  events: EVENTS_TYPES
});

const deleteInfluence = makeDeleteInfluence({
  ErrorText,
  ApplicationError,
  logger
});

const getInfluence = makeGetInfluence({
  ErrorText,
  moment,
  ApplicationError,
  logger,
  accepted: REQUEST_RESPONSE.ACCEPTED
});

const getInfluences = makeGetInfluences({
  ErrorText,
  moment,
  ApplicationError,
  logger,
  accepted: REQUEST_RESPONSE.ACCEPTED,
  GetSortObj
});

const hideInfluence = makeHideInfluence({
  ErrorText,
  ApplicationError,
  logger
});

const unhideInfluence = makeUnhideInfluence({
  ErrorText,
  ApplicationError,
  logger
});

const editInfluence = makeEditInfluence({
  ErrorText,
  ApplicationError,
  logger,
  events: EVENTS_TYPES,
  pending: REQUEST_STATUS.PENDING
});

const influencesUseCases = {
  addInfluence,
  deleteInfluence,
  hideInfluence,
  unhideInfluence,
  editInfluence,
  getInfluence,
  getInfluences
};

module.exports = influencesUseCases;
