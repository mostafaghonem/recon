const uuid = require('uuid').v4;
const redis = require('redis');
const redisClient = require('../../../shared/redis-client');
const logger = require('../../../startup/logger');
const { ApplicationError } = require('../../../shared/errors');

const makeReserveUC = require('./ReserveUC');
const makeAdminViewUC = require('./AdminViewUC');
const makeRenterViewUC = require('./RenterViewUC');
const makeOfficeViewUC = require('./OfficeViewUC');
const {
  calculateReservationCost,
  getOfficesDataFromIds
} = require('../../offices/offices-external-use-cases');

const {
  getUsersByIds,
  getUsersByPhone
} = require('../../User/user-external-use-cases');

const { processPayment } = require('../../Payment/external-use-case');

module.exports.ReserveUC = makeReserveUC({
  ApplicationError,
  logger,
  redis: redisClient,
  publisher: redis,
  uuid,
  checkAndCalculateReservationCost: calculateReservationCost,
  processPayment
});

module.exports.AdminViewUC = makeAdminViewUC({
  ApplicationError,
  logger,
  getRenterDataWithPhoneSearch: getUsersByPhone,
  getRenterDataWithIds: getUsersByIds,
  getOfficesDataFromIds
});

module.exports.RenterViewUC = makeRenterViewUC({
  ApplicationError,
  logger,
  getRenterDataWithIds: getUsersByIds,
  getOfficesDataFromIds
});

module.exports.OfficeViewUC = makeOfficeViewUC({
  ApplicationError,
  logger,
  getRenterDataWithPhoneSearch: getUsersByPhone,
  getRenterDataWithIds: getUsersByIds,
  getOfficesDataFromIds
});
