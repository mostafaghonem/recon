const model = require('../models');

module.exports = ({ ApplicationError, logger }) => async ({
  hostelId,
  totalRevenue,
  totalBooking
}) => {
  const update = {
    $inc: {
      totalRevenue,
      totalOnlineBooking: totalBooking,
      totalBooking
    }
  };
  const hostels = await model.updateOneById({
    id: hostelId,
    update
  });
  return hostels;
};
