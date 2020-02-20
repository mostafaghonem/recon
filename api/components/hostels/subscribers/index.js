const { REQUEST_RESPONSE } = require('../../../shared/constants/defaults');
const { ApplicationError } = require('../../../shared/errors');
const redisClient = require('../../../shared/redis-client');

const makeUpdateHostelBookingData = require('./update-hostel-bookingData');
const logger = require('../../../startup/logger');

// ! has errors

module.exports = () => {
  redisClient.subscribe('hostel-reservation-complete-payment');

  const updateHostelBookingData = makeUpdateHostelBookingData({
    logger,
    ApplicationError,
    redis: redisClient,
    accepted: REQUEST_RESPONSE.ACCEPTED
  });

  updateHostelBookingData();
};
