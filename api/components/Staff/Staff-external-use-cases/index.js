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

const makeGetStaffById = require('./get-staff-by-id');
const makeGetStaffsByIds = require('./get-staffs-by-ids');
const makeChangeStaffUnit = require('./change-staff-unit');
const makeAddStaffInfluence = require('./add-staff-influence');

const getStaffsByIds = makeGetStaffsByIds({
  ApplicationError,
  logger
});

const getStaffById = makeGetStaffById({
  ApplicationError,
  logger
});

const changeStaffUnit = makeChangeStaffUnit({
  ApplicationError,
  logger
});

const addStaffInfluence = makeAddStaffInfluence({
  ApplicationError,
  logger
});
const StaffExternalService = Object.freeze({
  getStaffById,
  getStaffsByIds,
  changeStaffUnit,
  addStaffInfluence
});

module.exports = StaffExternalService;
