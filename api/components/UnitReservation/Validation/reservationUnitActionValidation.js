const Joi = require('joi');
// const moment = require('moment');

const { ObjectIdPattern } = require('../../../shared/constants/defaults');

const houserOwnerDissection = {
  reservationRequestId: Joi.string()
    .regex(ObjectIdPattern, 'Object Id')
    .required(),
  acceptRefuseFlag: Joi.bool().required(),
  note: Joi.string()
};

module.exports = {
  houserOwnerDissection
};
