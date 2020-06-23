const { UnitReservationEntity } = require('../Entity');

const {
  EVENTS_TYPES,
  OBJECTS_TYPES,
  PERMISSIONS
} = require('../../../shared/constants/defaults');

module.exports = ({
  ApplicationError,
  UnitReservationEntity,
  UnitReservationState,
  createEvent
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
    const obj = {};
    obj[`${request.owner}`] = {
      userId: request.owner
    };
    obj[`${request.renter}`] = {
      userId: request.renter
    };
    createEvent({
      type: EVENTS_TYPES.RENTER_PAY_UNIT_RESERVATION_REQUEST,
      userId: request.renter,
      username: 'xx',
      message: 'pay for reservation unit request',
      objectId: request.id,
      objectName: OBJECTS_TYPES.UNIT_REQUEST,
      targets: obj
    });

    createEvent({
      type: EVENTS_TYPES.RENTER_PAY_UNIT_RESERVATION_REQUEST,
      userId: request.renter,
      username: 'xx',
      message: 'pay for reservation unit request',
      objectId: request.id,
      objectName: OBJECTS_TYPES.UNIT_REQUEST,
      permissions: [PERMISSIONS.ADMIN]
    });
    return { result: 'Payed success' };
  };
  return { renterPayRequest };
};
