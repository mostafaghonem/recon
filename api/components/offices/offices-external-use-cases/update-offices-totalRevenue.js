const model = require('../models');

module.exports = ({ ApplicationError, logger }) => async ({
  officeId,
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
  const offices = await model.updateOneById({
    id: officeId,
    update
  });
  return offices;
};
