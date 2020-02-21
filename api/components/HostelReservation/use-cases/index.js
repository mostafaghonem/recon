const uuid = require('uuid').v4;
const redis = require('redis');
const redisClient = require('../../../shared/redis-client');
const logger = require('../../../startup/logger');
const { ApplicationError } = require('../../../shared/errors');

const makeReserveUC = require('./ReserveUC');
const makeAdminViewUC = require('./AdminViewUC');
const makeRenterViewUC = require('./RenterViewUC');
const makeHostelViewUC = require('./HostelViewUC');
const {
  checkAndCalculateReservationCost,
  getHostelsDataFromIds,
  getRenterDataWithPhoneSearch,
  processPayment
} = require('./__mocks');

module.exports.ReserveUC = makeReserveUC({
  ApplicationError,
  logger,
  redis: redisClient,
  publisher: redis,
  uuid,
  checkAndCalculateReservationCost,
  processPayment
});

module.exports.AdminViewUC = makeAdminViewUC({
  ApplicationError,
  logger,
  getRenterDataWithPhoneSearch,
  getHostelsDataFromIds
});

module.exports.RenterViewUC = makeRenterViewUC({
  ApplicationError,
  logger,
  getRenterDataWithPhoneSearch,
  getHostelsDataFromIds
});

module.exports.HostelViewUC = makeHostelViewUC({
  ApplicationError,
  logger,
  getRenterDataWithPhoneSearch,
  getHostelsDataFromIds
});
