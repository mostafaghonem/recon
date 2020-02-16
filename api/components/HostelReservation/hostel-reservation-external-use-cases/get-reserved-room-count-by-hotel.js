const model = require('../Models');

// eslint-disable-next-line no-unused-vars
module.exports = ({ ApplicationError, logger }) => async (
  hostelsId,
  startDatets,
  endDatets
) => {
  const dbRet = await model.getReservationDetailsForHostelsByDateRangeAgg({
    hostelsId,
    startDatets,
    endDatets
  });
  return dbRet;
};
