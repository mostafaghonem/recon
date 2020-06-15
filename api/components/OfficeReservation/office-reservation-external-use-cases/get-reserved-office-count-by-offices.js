const model = require('../Models');

// eslint-disable-next-line no-empty-pattern
module.exports = ({}) => async (officesId, startDatets, endDatets) => {
  const dbRet = await model.getReservationDetailsForOfficesByDateRangeAgg({
    officesId,
    startDatets,
    endDatets
  });
  return dbRet;
};
