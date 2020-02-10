const logger = require('../../../startup/logger');

// eslint-disable-next-line no-unused-vars
const Working = (req, res, next) => {
  logger.info(`HostelReservation is working${req}`);
};

const hostelReservationCtrl = Object.freeze({
  Working
});

module.exports = hostelReservationCtrl;
