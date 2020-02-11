const model = require('../Models');

// eslint-disable-next-line no-unused-vars
module.exports = ({ ApplicationError, logger }) => async (
  hostelId,
  startDatets,
  endDatets
) => {
  const dbRet = await model.getReservationForHostelByDateRangeAgg({
    hostelId,
    startDatets,
    endDatets
  });
  return dbRet;
};
