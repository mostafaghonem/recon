/**
 
 
   
 */
const moment = require('moment');
const Models = require('../Models');
const { UnitReservationState } = require('../../../shared/constants/defaults');
const { UnitReservationEntity } = require('../Entity');
const ApplicationError = require('../../../shared/errors/ApplicationError');

module.exports = (
  /* but your inject here */ { getUnitDetails, processPayment, uuid }
) => {
  const acceptRequestWaitingPay = async requestId => {
    const reservationRequest = await UnitReservationEntity.loadEntityFromDbById(
      requestId
    );

    if (reservationRequest.pending) {
      return "this request is pending by another request you can't accept it";
    }

    await Models.updateOneById({
      id: requestId,
      update: { state: UnitReservationState.ACCEPT_BY_OWNER }
    });

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

  const unPendingRequest = async request => {
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
              UnitReservationState.ACCEPT_BY_OWNER,
              UnitReservationState.PAYED
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
  };

  const refuseAction = async (requestId, note) => {
    await Models.updateOneById({
      id: requestId,
      update: {
        state: UnitReservationState.REFUSED,
        note
      }
    });
    const request = await UnitReservationEntity.loadEntityFromDbById(requestId);

    await unPendingRequest(request);

    return { result: 'refuse success' };
  };
  // actual actions
  //
  /**   NOTE Shortcuts
   *        ABA accept by admin
   *        ABO accept by owner
   * - renter
   *  1 - renter can send request : ** done **
   *    & should ensure that request have no intersect with another one RECEIVED
   *      and check if have intersect with request ABO or PAYED and made it pending
   *  2 - renter can cancel request : ** done **
   *    & when renter cancel there is two state
   *      if he cancel request with state PAYED or ABO
   *        here you need to un-pending request that have intersect with it
   *      else
   *        made it CANCEL only
   *  3 - payed request : ** done **
   *    & check if state is ABO then need only to update state to PAYED
   *  4 - received : ** done **
   *    & check if he payed and current date is larger than or equal from date
   *         then ,made all request have intersect with it,
   *          and have ABO , ABA , PAYED or SEND and refuse it
   *
   * - house owner
   *   1 - when he accept request : ** done **
   *      & check this not pending first then -->
   *          need to pending all request with state SEND , ABA that have intersect with this request
   *   2 - when he refuse request : ** done **
   *      if(request have state accept by owner)
   *        here you need to un-pending request that have intersect with it
   *      else
   *        made it refuse and write reason only
   *  - admin
   *    1 - refuse as owner -- look above
   *    2 - accept as owner -- look above
   *    3 - pass request to owner
   *        --change state with accept by admin to made house owner can view it
   *
   *
   */
  // -------------------------renter action ---------------
  const renterCancelRequest = async (requestId, renterId) => {
    const request = await UnitReservationEntity.loadEntityFromDbById(requestId);
    if (!request) {
      throw new ApplicationError('there is no request with this id', 404);
    }
    if (renterId.toString() !== request.renter.toString()) {
      throw new ApplicationError('action not from the renter of request', 404);
    }
    if (
      request.state === UnitReservationState.PAYED ||
      request.state === UnitReservationState.ACCEPT_BY_OWNER
    ) {
      await unPendingRequest(request);
    }
    request.state = UnitReservationState.CANCEL;
    await request.updateState();
    return 'success';
  };

  const renterReceivedUnit = async (requestId, renterId) => {
    const request = await UnitReservationEntity.loadEntityFromDbById(requestId);
    if (!request) {
      throw new ApplicationError('this request not found', 404);
    }
    if (renterId.toString() !== request.renter.toString()) {
      throw new ApplicationError('action not from the renter of request', 404);
    }
    const fromDate = moment(request.from, 'x');
    const numberOfPeriod = fromDate.diff(moment(), 'seconds');
    if (request.state !== UnitReservationState.PAYED || numberOfPeriod > 0) {
      throw new ApplicationError("you can't receive this unit now", 404);
    }
    await request.gettingIntersectAndUpdateState(
      { from: { $lte: moment('x') } },
      {
        state: UnitReservationState.REFUSED,
        note: 'تم الرفض بسبب قبول طلب اخر '
      }
    );
    return 'Received Success';
  };

  const renterWantPayForUnit = async (requestId, renterId, method) => {
    const request = await UnitReservationEntity.loadEntityFromDbById(requestId);
    if (!request) {
      throw new ApplicationError('this request not found', 404);
    }
    if (renterId.toString() !== request.renter.toString()) {
      throw new ApplicationError('action not from the renter of request', 404);
    }

    const paymentId = uuid();
    const tokenForPayment = await processPayment({
      userId: request.renter,
      unitReservationId: request.id,
      paymentId,
      payload: {
        unitId: request.unit,
        method,
        totalAfterExtras: request.totalAfterExtras,
        currency: 'le'
      },
      timeLimit: 100000
    });
    return { message: 'process request done', payload: tokenForPayment };
  };

  // ----------------------house owner action ---------------------

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
  // --------------------- admin action----------------------------

  const adminAcceptPassRequestToHouseOwner = async requestId => {
    const result = await Models.updateOneById({
      id: requestId,
      update: { state: UnitReservationState.ACCEPT_BY_ADMIN }
    });
    return { result };
  };

  const adminAcceptRequestAsHouseOwner = async requestId => {
    const request = await Models.getOne({ query: { _id: requestId } });
    if (!request) {
      throw new ApplicationError('there is no request with this id', 404);
    }
    const result = await acceptRequestWaitingPay(requestId);
    return result;
  };

  const adminRefuseRequestAsHouseOwner = async (requestId, note) => {
    const request = await Models.getOne({ query: { _id: requestId } });
    if (!request) {
      throw new ApplicationError('there is no request with this id', 404);
    }

    const result = await refuseAction(requestId, note);
    return result;
  };
  return {
    acceptRequestFromHouseOwner,
    refuseRequestFromHouseOwner,
    renterCancelRequest,
    renterReceivedUnit,
    renterWantPayForUnit,
    adminAcceptPassRequestToHouseOwner,
    adminAcceptRequestAsHouseOwner,
    adminRefuseRequestAsHouseOwner
  };
};
