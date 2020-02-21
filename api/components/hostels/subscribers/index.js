const redis = require('redis');
const { REQUEST_RESPONSE } = require('../../../shared/constants/defaults');
const { ApplicationError } = require('../../../shared/errors');

const subscriper = redis.createClient({
  no_ready_check: true,
  host: process.env.REDIS_HOST,
  auth_pass: process.env.REDIS_PASS
});

const makeUpdateHostelBookingData = require('./update-hostel-bookingData');
const logger = require('../../../startup/logger');

// ! has errors

module.exports = () => {
  makeUpdateHostelBookingData({
    logger,
    ApplicationError,
    redis: subscriper,
    accepted: REQUEST_RESPONSE.ACCEPTED
  });
};
