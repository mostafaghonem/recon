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

const makeAddStaff = require('./add-staff');
const makeDeleteStaff = require('./delete-staff');
const makeGetStaff = require('./get-staff');
const makeGetStaffs = require('./get-staffs');
const makeHideStaff = require('./hide-staff');
const makeUnhideStaff = require('./unhide-staff');
const makeEditStaff = require('./edit-staff');

const addStaff = makeAddStaff({
  ApplicationError,
  logger,
  GetRecruitmentAreaFromAddress,
  CalculateReleaseDate,
  events: EVENTS_TYPES
});

const deleteStaff = makeDeleteStaff({
  ApplicationError,
  logger
});

const getStaff = makeGetStaff({
  moment,
  ApplicationError,
  logger,
  accepted: REQUEST_RESPONSE.ACCEPTED
});

const getStaffs = makeGetStaffs({
  _,
  moment,
  ApplicationError,
  logger,
  accepted: REQUEST_RESPONSE.ACCEPTED,
  GetSortObj
});

const hideStaff = makeHideStaff({
  ApplicationError,
  logger
});

const unhideStaff = makeUnhideStaff({
  ApplicationError,
  logger
});

const editStaff = makeEditStaff({
  ApplicationError,
  logger,
  events: EVENTS_TYPES,
  pending: REQUEST_STATUS.PENDING
});

const staffsUseCases = {
  addStaff,
  deleteStaff,
  hideStaff,
  unhideStaff,
  editStaff,
  getStaff,
  getStaffs
};

module.exports = staffsUseCases;
