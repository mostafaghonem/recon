const Joi = require('joi');
// const moment = require('moment');

const { ObjectIdPattern } = require('../../../shared/constants/defaults');

const houseOwnerPendingRequests = {
  unitId: Joi.string()
    .regex(ObjectIdPattern, 'Object Id')
    .required()
};

module.exports = {
  houseOwnerPendingRequests
};
