const { reservationUnitAction } = require('../UseCase');

exports.houseOwnerDissection = async (req, res, next) => {
  try {
    const dissection = req.body.acceptRefuseFlag;
    const requestId = req.body.reservationRequestId;
    let result = null;
    if (Boolean(dissection) === true) {
      result = await reservationUnitAction.acceptRequestFromHouseOwner(
        requestId
      );
    } else {
      result = await reservationUnitAction.refuseRequestFromHouseOwner(
        requestId
      );
    }
    return res.status(200).json(result);
  } catch (err) {
    return next();
  }
};
