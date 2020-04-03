const { addUnitReservationUseCase } = require('../UseCase');

exports.reserveUnit = async (req, res) => {
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
};

exports.unAvailableTimes = async (req, res) => {
  const unitId = req.params.unitId;
  const result = await addUnitReservationUseCase.returnAllUnAvailableTimesForUnit(
    unitId
  );
  return res.status(200).json(result);
};

exports.costOfUnit = async (req, res) => {
  const document = req.body;
  /**
    document:{
        from : 
        to :
        unitId :
    }
    */
  const result = await addUnitReservationUseCase.returnAllCostForUnit(
    document.unitId,
    document.from,
    document.to
  );
  return res.status(200).json(result);
};
