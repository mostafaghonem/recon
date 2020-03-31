const Joi = require('joi');
// const moment = require('moment');

const { ObjectIdPattern } = require('../../../shared/constants/defaults');

const bookRequest = {
  unit: Joi.string()
    .regex(ObjectIdPattern, 'Object Id')
    .required(),
  from: Joi.number().required(),
  to: Joi.number().min(Joi.ref('from'))
};

const unAvailableTimes = {
  unitId: Joi.string()
    .required()
    .regex(ObjectIdPattern, 'Object Id')
};
const getCost = {
  unit: Joi.string()
    .regex(ObjectIdPattern, 'Object Id')
    .required(),
  from: Joi.number()
    .min(
      // moment()
      //   .endOf('day')
      //   .format('x')
      0
    )
    .required(),
  to: Joi.number().min(Joi.ref('from'))
};

module.exports = {
  bookRequest,
  unAvailableTimes,
  getCost
};
