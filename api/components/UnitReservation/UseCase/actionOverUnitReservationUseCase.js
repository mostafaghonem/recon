/**
 
 
   
 */
const moment = require('moment');
const Models = require('../Models');
const {
  UnitReservationState,
  EVENTS_TYPES,
  OBJECTS_TYPES,
  PERMISSIONS
} = require('../../../shared/constants/defaults');

const { UnitReservationEntity } = require('../Entity');
const ApplicationError = require('../../../shared/errors/ApplicationError');

module.exports = (
  /* but your inject here */ {
    getUnitDetails,
    processPayment,
    uuid,
    createEvent,
    getUsersByIds
  }
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
    // notification part
    if (
      request.state === UnitReservationState.ACCEPT_BY_ADMIN ||
      request.state === UnitReservationState.ACCEPT_BY_OWNER ||
      request.state === UnitReservationState.PAYED
    ) {
      const owner = await getUsersByIds([request.owner]);
      const unit = await getUnitDetails(request.unit);
      if (owner[`${request.renter}`] && unit) {
        const obj = {};
        obj[`${request.owner}`] = {
          userId: request.owner
        };

        createEvent({
          type: EVENTS_TYPES.RENTER_CANCEL_UNIT_RESERVATION_REQUEST,
          userId: request.renter,
          username: owner[`${request.renter}`].fullName,
          message: 'قام بإلغاء طلب ايجاره ل',
          objectId: request._id || request.id,
          objectName: `${unit.address.government} ${unit.address.street}`,
          objectType: OBJECTS_TYPES.UNIT_REQUEST,
          targets: obj
        });
      }
    }

    // if (
    //   request.state === UnitReservationState.ACCEPT_BY_ADMIN ||
    //   request.state === UnitReservationState.ACCEPT_BY_OWNER ||
    //   request.state === UnitReservationState.PAYED ||
    //   request.state === UnitReservationState.PAYED
    // )
    //   createEvent({
    //     type: EVENTS_TYPES.RENTER_CANCEL_UNIT_RESERVATION_REQUEST,
    //     userId: request.renter,
    //     username: 'xx',
    //     message: 'cancel reservation unit',
    //     objectId: request.id,
    //     objectName: OBJECTS_TYPES.UNIT_REQUEST,
    //     permissions: [PERMISSIONS.ADMIN]
    //   });

    // end  notification part
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
        totalAfterExtras: request.totalAfterExtras + 3,
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

      // notification part
      // createEvent({
      //   type: EVENTS_TYPES.HOUSE_OWNER_ACCEPT_UNIT_RESERVATION_REQUEST,
      //   userId: request.owner,
      //   username: 'house owner',
      //   message: 'house owner accept unit reservation request',
      //   objectId: request.id,
      //   objectName: OBJECTS_TYPES.UNIT_REQUEST,
      //   permissions: [PERMISSIONS.ADMIN]
      // });
      const renter = await getUsersByIds([request.renter]);
      // const unit = await getUnitDetails(request.unit);
      if (renter[`${request.renter}`] && unit) {
        const obj = {};
        obj[`${request.renter}`] = {
          userId: request.renter
        };

        createEvent({
          type: EVENTS_TYPES.HOUSE_OWNER_ACCEPT_UNIT_RESERVATION_REQUEST,
          userId: request.owner,
          username: renter[`${request.renter}`].fullName,
          message: 'وافق على تأجير الوحدة',
          objectId: request._id,
          objectName: `${unit.address.government} ${unit.address.street}`,
          objectType: OBJECTS_TYPES.UNIT_REQUEST,
          targets: obj
        });
      }

      // end  notification part
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
      // notification part

      // createEvent({
      //   type: EVENTS_TYPES.HOUSE_OWNER_REFUSE_UNIT_RESERVATION_REQUEST,
      //   userId: request.owner,
      //   username: 'house owner',
      //   message: 'house owner refuse unit reservation request',
      //   objectId: request.id,
      //   objectName: OBJECTS_TYPES.UNIT_REQUEST,
      //   permissions: [PERMISSIONS.ADMIN]
      // });

      const renter = await getUsersByIds([request.renter]);
      // const unit = await getUnitDetails(request.unit);
      if (renter[`${request.renter}`] && unit) {
        const obj = {};
        obj[`${request.renter}`] = {
          userId: request.renter
        };

        createEvent({
          type: EVENTS_TYPES.HOUSE_OWNER_REFUSE_UNIT_RESERVATION_REQUEST,
          userId: request.owner,
          username: renter[`${request.renter}`].fullName,
          message: 'رفض تأجير الوحدة',
          objectId: request._id,
          objectName: `${unit.address.government} ${unit.address.street}`,
          objectType: OBJECTS_TYPES.UNIT_REQUEST,
          targets: obj
        });
      }

      // end  notification part
      return result;
    }

    throw new ApplicationError(
      'the owner of this unit not the refuser of request',
      403
    );
  };
  // --------------------- admin action----------------------------

  const adminAcceptPassRequestToHouseOwner = async (requestId, adminId) => {
    const result = await Models.updateOneById({
      id: requestId,
      update: { state: UnitReservationState.ACCEPT_BY_ADMIN }
    });
    // notification part
    const obj = {};
    obj[`${result.owner}`] = {
      userId: result.owner
    };
    const renter = await getUsersByIds([result.renter]);
    const unit = await getUnitDetails(result.unit);
    if (renter[`${result.renter}`] && unit)
      createEvent({
        type: EVENTS_TYPES.ADMIN_ACCEPT_UNIT_RESERVATION_REQUEST,
        userId: adminId,
        username: renter[`${result.renter}`].fullName,
        message: 'يريد تأجير الوحدة',
        objectId: result._id,
        objectName: `${unit.address.government} ${unit.address.street}`,
        objectType: OBJECTS_TYPES.UNIT_REQUEST,
        targets: obj
      });
    // end notification part
    return { result };
  };

  const adminAcceptRequestAsHouseOwner = async (requestId, adminId) => {
    const request = await Models.getOne({ query: { _id: requestId } });
    if (!request) {
      throw new ApplicationError('there is no request with this id', 404);
    }

    const result = await acceptRequestWaitingPay(requestId);
    // notification part

    const renter = await getUsersByIds([request.renter]);
    const unit = await getUnitDetails(request.unit);
    if (renter[`${request.renter}`] && unit) {
      const obj = {};
      obj[`${request.renter}`] = {
        userId: request.renter
      };

      createEvent({
        type: EVENTS_TYPES.HOUSE_OWNER_ACCEPT_UNIT_RESERVATION_REQUEST,
        userId: adminId,
        username: renter[`${request.renter}`].fullName,
        message: 'وافق على تأجير الوحدة',
        objectId: request._id,
        objectName: `${unit.address.government} ${unit.address.street}`,
        objectType: OBJECTS_TYPES.UNIT_REQUEST,
        targets: obj
      });
    }
    // end notification part
    return result;
  };

  const adminRefuseRequestAsHouseOwner = async (requestId, note, adminId) => {
    const request = await Models.getOne({ query: { _id: requestId } });
    if (!request) {
      throw new ApplicationError('there is no request with this id', 404);
    }
    const result = await refuseAction(requestId, note);
    // notification part

    const renter = await getUsersByIds([request.renter]);
    const unit = await getUnitDetails(request.unit);
    if (renter[`${request.renter}`] && unit) {
      const obj = {};
      obj[`${request.renter}`] = {
        userId: request.renter
      };

      createEvent({
        type: EVENTS_TYPES.HOUSE_OWNER_REFUSE_UNIT_RESERVATION_REQUEST,
        userId: adminId,
        username: renter[`${request.renter}`].fullName,
        message: 'رفض تأجير الوحدة',
        objectId: request._id,
        objectName: `${unit.address.government} ${unit.address.street}`,
        objectType: OBJECTS_TYPES.UNIT_REQUEST,
        targets: obj
      });
    }

    // end notification part
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
