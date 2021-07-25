const makeconstantScheme = require('./constantSchema');
const { defaultConstants } = require('../../../shared/constants');

const constantTypes = defaultConstants.CONSTANT_TYPES;

module.exports = makeconstantScheme({
  constantTypes
});
