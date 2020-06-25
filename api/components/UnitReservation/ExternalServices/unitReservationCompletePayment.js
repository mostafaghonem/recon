const {
  EVENTS_TYPES,
  OBJECTS_TYPES
  // PERMISSIONS
} = require('../../../shared/constants/defaults');

module.exports = ({
  ApplicationError,
  UnitReservationEntity,
  UnitReservationState,
  createEvent,
  getUsersByIds,
  getUnitDetails
}) => {
  const renterPayRequest = async ({ payload }) => {
    const request = await UnitReservationEntity.loadEntityFromDbById(
      payload.unitReservationId
    );
    if (!request) {
      throw new ApplicationError('this request not found', 404);
    }

    request.state = UnitReservationState.PAYED;
    await request.updateState();

    // notification part

    const owner = await getUsersByIds([request.owner]);
    const unit = await getUnitDetails(request.unit);
    if (owner[`${request.renter}`] && unit) {
      const obj = {};
      obj[`${request.owner}`] = {
        userId: request.owner
      };

      createEvent({
        type: EVENTS_TYPES.RENTER_PAY_UNIT_RESERVATION_REQUEST,
        userId: request.renter,
        username: owner[`${request.renter}`].fullName,
        message: 'قام بدفع طلب ايجاره ل',
        objectId: request._id || request.id,
        objectName: `${unit.address.government} ${unit.address.street}`,
        objectType: OBJECTS_TYPES.UNIT_REQUEST,
        targets: obj
      });
    }

    // createEvent({
    //   type: EVENTS_TYPES.RENTER_PAY_UNIT_RESERVATION_REQUEST,
    //   userId: request.renter,
    //   username: 'xx',
    //   message: 'pay for reservation unit request',
    //   objectId: request.id,
    //   objectName: OBJECTS_TYPES.UNIT_REQUEST,
    //   permissions: [PERMISSIONS.ADMIN]
    // });

    // end notification part
    return { result: 'Payed success' };
  };
  return { renterPayRequest };
};
