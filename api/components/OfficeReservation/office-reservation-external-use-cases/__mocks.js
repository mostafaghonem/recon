const logger = require('../../../startup/logger');

/**
 * totalRevenue => what's paid in this transaction
 * totalOnlineBookingCount => how many reservations in this transaction
 * from update-office-bookingData.js
 */
const updateOfficeBookingData = (
  officeId,
  totalRevenue,
  totalOnlineBookingCount
) => {
  logger.info(
    `updateOfficeBookingData called with data ${JSON.stringify(
      { officeId, totalRevenue, totalOnlineBookingCount },
      undefined,
      4
    )}`
  );
};
module.exports = {
  updateOfficeBookingData
};
