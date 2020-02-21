const model = require('../Models');

// eslint-disable-next-line no-empty-pattern
module.exports = ({}) => async (hostelsId, startDatets, endDatets) => {
  const dbRet = await model.getReservationDetailsForHostelsByDateRangeAgg({
    hostelsId,
    startDatets,
    endDatets
  });
  return dbRet;
};
