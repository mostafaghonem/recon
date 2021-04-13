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

const makeGetSoldierById = require('./get-soldier-by-id');
const makeGetSoldiersByIds = require('./get-soldiers-by-ids');
const makeChangeSoldierUnit = require('./change-soldier-unit');
const makeAddSoldierInfluence = require('./add-solider-influence');
const makeAddSoldierClearance = require('./add-soldier-clearance');
const makeGetSoldierByUnitId = require('./get-soldiers-by-unit-id');

const getSoldierById = makeGetSoldierById({
  ApplicationError,
  logger
});

const getSoldiersByIds = makeGetSoldiersByIds({
  ApplicationError,
  logger
});

const changeSoldierUnit = makeChangeSoldierUnit({
  ApplicationError,
  logger
});

const addSoldierInfluence = makeAddSoldierInfluence({
  ApplicationError,
  logger
});

const addSoldierClearance = makeAddSoldierClearance({
  ApplicationError,
  logger
});

const getSoldiersByUnitId = makeGetSoldierByUnitId({});

const SoldierExternalService = Object.freeze({
  getSoldierById,
  getSoldiersByIds,
  getSoldiersByUnitId,
  changeSoldierUnit,
  addSoldierInfluence,
  addSoldierClearance
});

module.exports = SoldierExternalService;
