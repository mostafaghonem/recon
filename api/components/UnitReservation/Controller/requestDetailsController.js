const { getUnitReservationUseCase } = require('../UseCase');
const { UnitReservationState } = require('../../../shared/constants/defaults');

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

exports.getRenterRequests = async (req, res, next) => {
  try {
    const result = await getUnitReservationUseCase.returnRequestForRenter(
      req.user.id
    );

    return res.status(200).json(result);
  } catch (err) {
    return next();
  }
};

exports.getAdminRequests = async (req, res, next) => {
  try {
    const skip = req.query.skip ? Number(req.query.skip) : 0 || 0;
    const limit = req.query.limit
      ? Number(req.query.limit)
      : 10000000000 || 100000000000;
    const search = req.query.search || '';
    const state = req.query.state
      ? [req.query.state]
      : Object.values(UnitReservationState);
    const result = await getUnitReservationUseCase.getAdminRequest(
      limit,
      skip,
      search,
      state
    );

    return res.status(200).json(result);
  } catch (err) {
    return next();
  }
};
