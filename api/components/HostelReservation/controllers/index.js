const logger = require('../../../startup/logger');

const makeReserveController = require('./reserveController');

// eslint-disable-next-line no-unused-vars
const Working = (req, res, next) => {
  logger.info(
    `HostelReservation is working${JSON.stringify(req.user, undefined, 4)}`
  );
};

const reserveController = makeReserveController({});

const hostelReservationCtrl = Object.freeze({
  reserve: reserveController,
  Working
});

module.exports = hostelReservationCtrl;
