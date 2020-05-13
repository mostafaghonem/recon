/**
 
 
   
 */
const Models = require('../Models');
const { UnitReservationState } = require('../../../shared/constants/defaults');
const { UnitReservationEntity } = require('../Entity');
const ApplicationError = require('../../../shared/errors/ApplicationError');

module.exports = (/* but your inject here */ { getUnitDetails }) => {
  const passRequestToHouseOwner = async requestId => {
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
  const acceptRequestWaitingPay = async requestId => {
    await Models.updateOneById({
      id: requestId,
      update: { state: UnitReservationState.ACCEPT_BY_OWNER }
    });
    const reservationRequest = await UnitReservationEntity.loadEntityFromDbById(
      requestId
    );
    await reservationRequest.gettingIntersectAndUpdateState(
      {
        state: {
          $in: [UnitReservationState.SEND, UnitReservationState.ACCEPT_BY_ADMIN]
        }
      },
      {
        pending: true,
        note: 'هذا الطلب معلق بسبب الموافقة على طلب اخر متضارب معه فى التوقيت.'
      }
    );

    return { result: 'success' };
  };

  /* 
     7 - refuse request from Owner for any reason but all before payed
        Done: update the request to "refuse"
        Done: getting all request that is pending 
        TODO need to debug:and have no intersect with accepted request and made it "send"
  */
  const refuseAction = async (requestId, note) => {
    await Models.updateOneById({
      id: requestId,
      update: {
        state: UnitReservationState.REFUSED,
        note
      }
    });
    const request = await UnitReservationEntity.loadEntityFromDbById(requestId);

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

    return { result: 'refuse success' };
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
      { state: UnitReservationState.REFUSED }
    );
    return { result: 'Payed success' };
  };

  const acceptRequestFromHouseOwner = async (requestId, owner) => {
    const request = await Models.getOne({ query: { _id: requestId } });
    if (!request) {
      throw new ApplicationError('there is no request with this id', 404);
    }
    const unit = await getUnitDetails(request.unit);
    if (owner.toString() === unit.userId.toString()) {
      const result = await acceptRequestWaitingPay(requestId);
      return result;
    }
    throw new ApplicationError(
      'the owner of this unit not the acceptance of request',
      403
    );
  };

  const refuseRequestFromHouseOwner = async (requestId, owner, note) => {
    const request = await Models.getOne({ query: { _id: requestId } });
    if (!request) {
      throw new ApplicationError('there is no request with this id', 404);
    }

    const unit = await getUnitDetails(request.unit);

    if (owner.toString() === unit.userId.toString()) {
      const result = await refuseAction(requestId, note);
      return result;
    }

    throw new ApplicationError(
      'the owner of this unit not the refuser of request',
      403
    );
  };
  return {
    passRequestToHouseOwner,
    acceptRequestFromHouseOwner,
    refuseRequestFromHouseOwner,
    renterPayRequest
  };
};
