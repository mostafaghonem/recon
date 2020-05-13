const { reservationUnitAction } = require('../UseCase');

exports.houseOwnerDissection = async (req, res, next) => {
  try {
    const dissection = req.body.acceptRefuseFlag;
    const requestId = req.body.reservationRequestId;
    let result = null;
    if (dissection === 'true') {
      result = await reservationUnitAction.acceptRequestFromHouseOwner(
        requestId,
        req.user.id
      );
    } else {
      result = await reservationUnitAction.refuseRequestFromHouseOwner(
        requestId,
        req.user.id,
        req.body.note
      );
    }
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return next();
  }
};
