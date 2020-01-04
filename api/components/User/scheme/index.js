const makeUserScheme = require('./UserScheme');
const { defaults: defaultsConstants } = require('../../../shared/constants');

const genderEnum = Object.values(defaultsConstants.GENDER_TYPES);
const jobTypeEnum = Object.values(defaultsConstants.JOB_TYPES);

module.exports = makeUserScheme({ genderEnum, jobTypeEnum });
