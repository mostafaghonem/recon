/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case here in index and inject it to the method wrapper
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */

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

const makeAddMail = require('./add-mail');
const makeDeleteMail = require('./delete-mail');
const makeGetMail = require('./get-mail');
const makeGetMails = require('./get-mails');
const makeGetUnAnsweredMails = require('./get-unanswered-mails');
const makeHideMail = require('./hide-mail');
const makeUnhideMail = require('./unhide-mail');
const makeEditMail = require('./edit-mail');
const makeDistributeMail = require('./distribute-mail');
const makeMarkDelievered = require('./mark-delievered');
const makeMarkSeen = require('./mark-seen');

const markDelievered = makeMarkDelievered({ ApplicationError, logger });
const markSeen = makeMarkSeen({ ApplicationError, logger });

const addMail = makeAddMail({
  ApplicationError,
  logger,
  GetRecruitmentAreaFromAddress,
  CalculateReleaseDate,
  events: EVENTS_TYPES
});

const deleteMail = makeDeleteMail({
  ApplicationError,
  logger
});

const getMail = makeGetMail({
  moment,
  ApplicationError,
  logger,
  accepted: REQUEST_RESPONSE.ACCEPTED
});

const getMails = makeGetMails({
  moment,
  ApplicationError,
  logger,
  accepted: REQUEST_RESPONSE.ACCEPTED,
  GetSortObj,
  markDelievered
});

const hideMail = makeHideMail({
  ApplicationError,
  logger
});

const unhideMail = makeUnhideMail({
  ApplicationError,
  logger
});

const editMail = makeEditMail({
  ApplicationError,
  logger,
  events: EVENTS_TYPES,
  pending: REQUEST_STATUS.PENDING
});

const distributeMail = makeDistributeMail({
  ApplicationError,
  logger,
  events: EVENTS_TYPES,
  pending: REQUEST_STATUS.PENDING
});

const getUnAnsweredMails = makeGetUnAnsweredMails({});
const mailsUseCases = {
  addMail,
  deleteMail,
  hideMail,
  unhideMail,
  editMail,
  distributeMail,
  getMail,
  getMails,
  getUnAnsweredMails,
  markDelievered,
  markSeen
};

module.exports = mailsUseCases;
