const makeUserScheme = require('./UserScheme');
const { defaultConstants } = require('../../../shared/constants');

const permissions = Object.values(defaultConstants.PERMISSIONS);

module.exports = makeUserScheme({
  permissions
});
