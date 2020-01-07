const makeUserScheme = require('./UserScheme');
const { defaultConstants } = require('../../../shared/constants');

const genderEnum = Object.values(defaultConstants.GENDER_TYPES);
const jobTypeEnum = Object.values(defaultConstants.JOB_TYPES);

module.exports = makeUserScheme({ genderEnum, jobTypeEnum });
