const { getUnitReservationUseCase } = require('../UseCase');

exports.getHouseOwnerRequests = async (req, res, next) => {
  try {
    const result = await getUnitReservationUseCase.getPendingRequestForHouseOwner(
      req.params.unitId
    );

    return res.status(200).json(result);
  } catch (err) {
    return next();
  }
};
