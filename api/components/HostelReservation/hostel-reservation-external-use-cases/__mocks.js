const logger = require('../../../startup/logger');

/**
 * totalRevenue => what's paid in this transaction
 * totalOnlineBookingCount => how many reservations in this transaction
 * from update-hostel-bookingData.js
 */
const updateHostelBookingData = (
  hostelId,
  totalRevenue,
  totalOnlineBookingCount
) => {
  logger.info(
    `updateHostelBookingData called with data ${JSON.stringify(
      { hostelId, totalRevenue, totalOnlineBookingCount },
      undefined,
      4
    )}`
  );
};
module.exports = {
  updateHostelBookingData
};
