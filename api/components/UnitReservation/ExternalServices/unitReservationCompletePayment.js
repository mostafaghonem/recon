module.exports = ({
  ApplicationError,
  UnitReservationEntity,
  UnitReservationState
}) => {
  const renterPayRequest = async ({ payload }) => {
    console.log(payload, '22222222222222222222222');
    const request = await UnitReservationEntity.loadEntityFromDbById(
      payload.unitReservationId
    );
    if (!request) {
      throw new ApplicationError('this request not found', 404);
    }

    request.state = UnitReservationState.PAYED;
    await request.updateState();
    return { result: 'Payed success' };
  };
  return { renterPayRequest };
};
