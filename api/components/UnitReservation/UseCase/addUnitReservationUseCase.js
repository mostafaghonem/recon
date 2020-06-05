// const UnitReservationModel = require('../Models/UnitReservationModel');
const Model = require('../Models');
const { UnitReservationEntity } = require('../Entity');
const { UnitReservationState } = require('../../../shared/constants/defaults');

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

module.exports = (
  { calculateCost, getUnitDetail } /* but your inject here */
) => {
  /**
    Here you should return array of times like [{from:--, to:--}]
    from should be smaller than to and from should be less than current time
   */
  const returnAllUnAvailableTimesForUnit = async unitId => {
    const result = await Model.gettingUnAvailableTime(unitId);
    if (result) {
      return { result };
    }
    return { error: { message: 'error from database', statusCode: 500 } };
  };
  /**
   you need to check if this monthly of with day
   if this monthly you need to cal amount of 
   */
  const returnAllCostForUnit = async (unitId, from, to) => {
    const result = await calculateCost({ unitId, from, to });
    if (!result) {
      return new Error("can't get the cost of this unit.");
    }
    return result;
  };

  /* here need to get all the unit 
    - with the same id and
    - have intersect with coming one and  
    - with state payed or received
    if length of coming list larger than 0 return un-valid unit 
    else added it with state send 
  */
  const addingRequestToUnit = async (
    renderId,
    comingOne /** {unit, from , to} */
  ) => {
    const checkValid = await Model.checkAddingNewReservation(
      comingOne.unit,
      comingOne
    );

    if (checkValid && comingOne.from < comingOne.to) {
      const cost = await calculateCost({
        unitId: comingOne.unit,
        from: comingOne.from,
        to: comingOne.to
      });

      const unitDetail = await getUnitDetail(comingOne.unit);
      const requestData = {
        ...comingOne,
        renter: renderId,
        cost,
        owner: unitDetail.userId
      };
      const request = new UnitReservationEntity(requestData);
      const intersectRequest = await request.gettingIntersectWithFilter({
        state: {
          $in: [
            UnitReservationState.ACCEPT_BY_OWNER,
            UnitReservationState.PAYED
          ]
        }
      });
      // check if have intersect with request ABO or PAYED and made it pending
      if (intersectRequest && intersectRequest.length) {
        requestData.pending = true;
      }
      const result = await Model.createOne({
        document: requestData
      });
      return { result };
    }
    return { error: { message: 'not valid time', statusCode: 401 } };
  };

  const cancelRequest = async requestId => {
    const request = await UnitReservationEntity.loadEntityFromDbById(requestId);
    if (request.state === UnitReservationState.ACCEPT_BY_OWNER) {
      const intersectedWithPendingState = await request.gettingIntersectWithFilter(
        {
          pending: true
        }
      );
      const lengthOfInvalidResultPromises = [];

      intersectedWithPendingState.forEach(request_ => {
        lengthOfInvalidResultPromises.push(
          request_.gettingIntersectWithFilter({
            state: {
              $in: [
                UnitReservationState.ACCEPT_BY_OWNER
                // UnitReservationState.PAYED,
                // UnitReservationState.RECEIVED
              ]
            }
          })
        );
      });

      const resultOfInvalidResult = await Promise.all(
        lengthOfInvalidResultPromises
      );

      resultOfInvalidResult.forEach((el, indx) => {
        if (el.length <= 0) {
          intersectedWithPendingState[indx].pending = false;
          intersectedWithPendingState[indx].updateState();
        }
      });
    }
    await Model.updateOneById({
      id: requestId,
      update: {
        state: UnitReservationState.CANCEL
      }
    });
    return 'cancel success';
  };

  return {
    returnAllUnAvailableTimesForUnit,
    returnAllCostForUnit,
    addingRequestToUnit,
    cancelRequest
  };
};
