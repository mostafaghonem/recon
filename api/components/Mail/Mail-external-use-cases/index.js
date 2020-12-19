/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case
 *
 *
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */
const logger = require('../../../startup/logger');
// TODO need to remove it from here and find a solution to put it in index.js
const { ApplicationError } = require('../../../shared/errors');

const makeGetMailById = require('./get-mail-by-id');
const makeChangeMailUnit = require('./change-mail-unit');

const getMailById = makeGetMailById({
  ApplicationError,
  logger
});

const changeMailUnit = makeChangeMailUnit({
  ApplicationError,
  logger
});

const MailExternalService = Object.freeze({
  getMailById,
  changeMailUnit
});

module.exports = MailExternalService;
