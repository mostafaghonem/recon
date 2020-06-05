const Joi = require('joi');
// const moment = require('moment');

const { ObjectIdPattern } = require('../../../shared/constants/defaults');
const { UnitReservationState } = require('../../../shared/constants/defaults');

const houseOwnerPendingRequests = {
  unitId: Joi.string()
    .regex(ObjectIdPattern, 'Object Id')
    .required()
};

const stateValidation = {
  state: Joi.string().valid(['', ...Object.values(UnitReservationState)]),
  skip: Joi.number(),
  limit: Joi.number(),
  search: Joi.string().allow('')
};

module.exports = {
  houseOwnerPendingRequests,
  stateValidation
};
