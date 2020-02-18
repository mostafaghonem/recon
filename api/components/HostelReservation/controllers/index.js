const logger = require('../../../startup/logger');

const makeReserveController = require('./reserveController');
const makeAdminViewController = require('./adminViewController');

// eslint-disable-next-line no-unused-vars
const Working = (req, res, next) => {
  logger.info(
    `HostelReservation is working${JSON.stringify(req.user, undefined, 4)}`
  );
};

const reserveController = makeReserveController({});
const adminViewController = makeAdminViewController({});

const hostelReservationCtrl = Object.freeze({
  reserve: reserveController,
  adminView: adminViewController
});

module.exports = hostelReservationCtrl;
