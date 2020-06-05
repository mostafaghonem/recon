/* 

 4 - getting request with filter like:
        : get all request to admin with pagination and search
        : get all request to renter renter id with pagination and search
        : get all request to unit it self with pagination and search
 ****** external service that return number if request in each unit

*/
const moment = require('moment');
const UnitReservationModel = require('../Models');
const sharedSearch = require('../../../shared/services/sharedSearch');

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

  const changePeriod = arr => {
    return arr.map(result => {
      const fromDate = moment(result.from, 'x');
      const toDate = moment(result.to, 'x');
      const numberOfPeriod =
        toDate.diff(
          fromDate,
          result.unit.dailyOrMonthly === PRICE_PER.DAY ? 'days' : 'months'
        ) + 1;
      return { ...result, numberOfPeriod, per: result.unit.dailyOrMonthly };
    });
  };

  const getPendingRequestForHouseOwner = async unitId => {
    let arr = await UnitReservationModel.gettingRequestForUnit(unitId);
    arr = changePeriod(arr);
    return arr;
  };

  const getAdminRequest = async (limit, skip, search, stateArray) => {
    console.log(stateArray, '444444444');
    const searchQuery = sharedSearch(search, [
      { value: 'renter.fullName' },
      { value: 'owner.fullName' },
      { value: 'unit.address.street' }
    ]);
    let arr = await UnitReservationModel.gettingRequestForAmin(
      limit,
      skip,
      searchQuery,
      stateArray
    );
    arr = changePeriod(arr);
    const total = await UnitReservationModel.count({ filter: {} });
    return { total, result: arr };
  };

  return {
    returnAllRequestForAdmin,
    returnNumberOfRequestForAdmin,
    returnRequestForRenter,
    getPendingRequestForHouseOwner,
    getAdminRequest
  };
};
