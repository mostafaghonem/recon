const logger = require('../../../startup/logger');

const makeReserveController = require('./reserveController');
const makeAdminViewController = require('./adminViewController');
const makeRenterViewController = require('./renterViewController');
const makeHostelViewController = require('./hostelViewController');

// eslint-disable-next-line no-unused-vars

const reserveController = makeReserveController({});
const adminViewController = makeAdminViewController({});
const renterViewController = makeRenterViewController({});
const hostelViewController = makeHostelViewController({});

const hostelReservationCtrl = Object.freeze({
  reserve: reserveController,
  adminView: adminViewController,
  renterView: renterViewController,
  hostelView: hostelViewController
});

module.exports = hostelReservationCtrl;
