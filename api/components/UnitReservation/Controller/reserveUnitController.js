const { addUnitReservationUseCase } = require('../UseCase');

exports.reserveUnit = async (req, res, next) => {
  try {
    const document = req.body;
    /**
   * document :{
       from :
       to:
       unit:
   }
   */
    const renterUser = req.user.id;
    const result = await addUnitReservationUseCase.addingRequestToUnit(
      renterUser,
      document
    );
    return res.status(200).json(result);
  } catch (err) {
    return next();
  }
};

exports.unAvailableTimes = async (req, res, next) => {
  try {
    const unitId = req.params.unitId;
    const result = await addUnitReservationUseCase.returnAllUnAvailableTimesForUnit(
      unitId
    );
    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
};

exports.costOfUnit = async (req, res, next) => {
  try {
    const document = req.query;
    /**
      document:{
          from : 
          to :
          unit :
      }
      */
    const result = await addUnitReservationUseCase.returnAllCostForUnit(
      document.unit,
      document.from,
      document.to
    );
    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
};
