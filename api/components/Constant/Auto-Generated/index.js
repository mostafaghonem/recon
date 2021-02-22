const logger = require('../../../startup/logger');

const makeCreateSystemDefaults = require('./create-system-defaults');

const createSystemDefaults = makeCreateSystemDefaults({
  logger
});

module.exports = () => {
  createSystemDefaults();
};
