const uuid = require('uuid').v4;
const redisClient = require('../../../shared/redis-client');
const logger = require('../../../startup/logger');
const { ApplicationError } = require('../../../shared/errors');

const makeReserveUC = require('./ReserveUC');

module.exports.ReserveUC = makeReserveUC({
  ApplicationError,
  logger,
  redis: redisClient,
  uuid,
  checkAndCalculateReservationCost: async ({
    renterId,
    hostelId,
    fromts,
    tots,
    totalReservedCount,
    rooms
  }) => {
    logger.info(
      `checkAndCalculateReservationCost called with args ${JSON.stringify(
        {
          renterId,
          hostelId,
          fromts,
          tots,
          totalReservedCount,
          rooms
        },
        undefined,
        4
      )}`
    );
    return Promise.resolve(Math.floor(Math.random() * 2000 + 500));
  },
  processPayment: async ({ paymentId, shouldPay, timeLimit, payload }) => {
    logger.info(
      `Some user should pay ${shouldPay} for this paymentId ${paymentId} within ${timeLimit} ms \n with payload ${JSON.stringify(
        payload,
        undefined,
        5
      )}`
    );
    return Promise.resolve(true);
  }
});
