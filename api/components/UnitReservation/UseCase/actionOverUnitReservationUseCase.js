/**
 
 
   
 */
const Models = require('../Models');
const { UnitReservationState } = require('../../../shared/constants/defaults');
const { UnitReservationEntity } = require('../Entity');

module.exports = (/* but your inject here */) => {
  const acceptRequestFromAdmin = async requestId => {
    const result = await Models.updateOneById({
      id: requestId,
      update: { state: UnitReservationState.ACCEPT_BY_ADMIN }
    });
    return { result };
  };
  // this one should be external ----------------one---------------
  /*
    6 - accept request from owner 
        Done: update the request state to "acceptByOwner"
        Done: here we need to gel all request with intersect with this request 
        Done: update its state to pending 

  */
  const acceptRequestFromOwner = async requestId => {
    await Models.updateOneById({
      id: requestId,
      update: { state: UnitReservationState.ACCEPT_BY_OWNER }
    });
    const reservationRequest = await UnitReservationEntity.loadEntityFromDbById(
      requestId
    );
    await reservationRequest.gettingIntersectAndUpdateState(
      {},
      UnitReservationState.PENDING
    );
    return { result: 'success' };
  };

  /* 
     7 - refuse request from Owner for any reason but all before payed
        Done: update the request to "refuse"
        Done: getting all request that is pending 
        TODO need to debug:and have no intersect with accepted request and made it "send"
  */
  const refuseActionFromOwner = async (requestId, note) => {
    await Models.updateOneById({
      id: requestId,
      update: {
        state: UnitReservationState.refuseActionFromOwner,
        note
      }
    });
    const request = await UnitReservationEntity.loadEntityFromDbById(requestId);

    const intersectedWithPendingState = request.gettingIntersectWithFilter({
      state: UnitReservationState.PENDING
    });
    const lengthOfInvalidResultPromises = [];
    intersectedWithPendingState.forEach(request_ => {
      lengthOfInvalidResultPromises.push(
        request_.gettingIntersectWithFilter({
          state: {
            $in: [
              UnitReservationState.ACCEPT_BY_OWNER,
              UnitReservationState.PAYED,
              UnitReservationState.RECEIVED
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
        intersectedWithPendingState[indx].state = UnitReservationState.SEND;
        intersectedWithPendingState[indx].update();
      }
    });

    return { result: 'success' };
  };
  /*
 8 - renter accept pay
        DONE: update request to "PAYED"
        DONE: get all request that intersect with this request and made it "refuse"
  */
  const renterPayRequest = async requestId => {
    const request = await UnitReservationEntity.loadEntityFromDbById(requestId);
    request.state = UnitReservationState.PAYED;
    await request.updateState();
    await request.gettingIntersectAndUpdateState(
      {},
      UnitReservationState.REFUSED
    );
    return { result: 'Payed success' };
  };

  return {
    acceptRequestFromAdmin,
    acceptRequestFromOwner,
    refuseActionFromOwner,
    renterPayRequest
  };
};
