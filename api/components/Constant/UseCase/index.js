/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case here in index and inject it to the method wrapper
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */

const moment = require('moment');
const logger = require('../../../startup/logger');
const { ApplicationError } = require('../../../shared/errors');

const {
  GetSortObj,
  GetRecruitmentAreaFromAddress,
  CalculateReleaseDate
} = require('../../../shared/constants/methods');

const { getUnAnsweredMails } = require('../../Mail/Mail-external-use-cases');
const makeAddConstant = require('./add-constant');
const makeDeleteConstant = require('./delete-constant');
const makeGetConstants = require('./get-constants');
const makeHideConstant = require('./hide-constant');
const makeUnhideConstant = require('./unhide-constant');

const addConstant = makeAddConstant({
  ApplicationError,
  logger,
  GetRecruitmentAreaFromAddress,
  CalculateReleaseDate
});

const deleteConstant = makeDeleteConstant({
  ApplicationError,
  logger
});

const getConstants = makeGetConstants({
  moment,
  ApplicationError,
  logger,
  GetSortObj,
  getUnAnsweredMails
});

const hideConstant = makeHideConstant({
  ApplicationError,
  logger
});

const unhideConstant = makeUnhideConstant({
  ApplicationError,
  logger
});

const ConstantsUseCases = {
  addConstant,
  deleteConstant,
  hideConstant,
  unhideConstant,
  getConstants
};

module.exports = ConstantsUseCases;
