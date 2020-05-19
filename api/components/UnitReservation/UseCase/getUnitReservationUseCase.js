/* 

 4 - getting request with filter like:
        : get all request to admin with pagination and search
        : get all request to renter renter id with pagination and search
        : get all request to unit it self with pagination and search
 ****** external service that return number if request in each unit

*/
const moment = require('moment');
const UnitReservationModel = require('../Models');

const {
  PRICE_PER,
  UnitReservationState
} = require('../../../shared/constants/defaults');

module.exports = (/* but your inject here */) => {
  const returnAllRequestForAdmin = async () => {};
  // this one should be external ----------------one---------------
  const returnNumberOfRequestForAdmin = async (/* unitId, from, to */) => {};

  const returnRequestForRenter = async renterId => {
    const arr = await UnitReservationModel.gettingRequestOfRenter(renterId);
    for (let i = 0; i < arr.length; i++) {
      const request = arr[i];
      if (
        request.state !== UnitReservationState.PAYED ||
        request.state !== UnitReservationState.RECEIVED
      ) {
        delete request.owner;
      }
    }
    return arr;
  };

  const getPendingRequestForHouseOwner = async unitId => {
    let arr = await UnitReservationModel.gettingRequestForUnit(unitId);

    arr = arr.map(result => {
      const fromDate = moment(result.from, 'x');
      const toDate = moment(result.to, 'x');
      const numberOfPeriod =
        toDate.diff(
          fromDate,
          result.unit.dailyOrMonthly === PRICE_PER.DAY ? 'days' : 'months'
        ) + 1;
      return { ...result, numberOfPeriod, per: result.unit.dailyOrMonthly };
    });
    return arr;
  };

  return {
    returnAllRequestForAdmin,
    returnNumberOfRequestForAdmin,
    returnRequestForRenter,
    getPendingRequestForHouseOwner
  };
};
