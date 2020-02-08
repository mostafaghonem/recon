// const UnitReservationModel = require('../Models/UnitReservationModel');

/**
    1 - getting un-available times over single unit
        : get all request with state done or received
        : and with data larger than current data
    2 - when user select from - to reservation stamp 
        : need to cal the cost of his reservation and retrieve it to front
        ** less (need to get some data from unit schema)
    3 - adding request 
        : need to check if this request have intersect with same unit and over 
        from to with another request with state payed or received
 */

module.exports = (/* but your inject here */) => {
  const returnAllUnAvailableTimesForUnit = async () => {};
  const returnAllCostForUnit = async (/* unitId, from, to */) => {};
  const addingRequestToUnit = async (/* unitData */) => {};

  return {
    returnAllUnAvailableTimesForUnit,
    returnAllCostForUnit,
    addingRequestToUnit
  };
};
