const { reservationUnitAction } = require('../UseCase');

exports.houseOwnerDecision = async (req, res, next) => {
  try {
    const decision = req.body.acceptRefuseFlag;
    const requestId = req.body.reservationRequestId;
    let result = null;
    if (decision === 'true') {
      result = await reservationUnitAction.acceptRequestFromHouseOwner(
        requestId,
        req.user.id
      );
    } else {
      result = await reservationUnitAction.refuseRequestFromHouseOwner(
        requestId,
        req.user.id,
        req.body.note || ''
      );
    }
    return res.status(200).json(result);
  } catch (err) {
    return next();
  }
};

exports.renterCancelRequest = async (req, res, next) => {
  try {
    const requestId = req.params.requestId;
    const renterId = req.user.id;
    const result = await reservationUnitAction.renterCancelRequest(
      requestId,
      renterId
    );
    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
};

exports.renterReceivedUnit = async (req, res, next) => {
  try {
    const requestId = req.params.requestId;
    const renterId = req.user.id;
    const result = await reservationUnitAction.renterReceivedUnit(
      requestId,
      renterId
    );
    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
};

exports.adminAcceptPassRequestToHouseOwner = async (req, res, next) => {
  try {
    const requestId = req.params.requestId;
    const result = await reservationUnitAction.adminAcceptPassRequestToHouseOwner(
      requestId
    );
    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
};

exports.adminDecision = async (req, res, next) => {
  try {
    const decision = req.body.acceptRefuseFlag;
    const requestId = req.body.reservationRequestId;
    let result = null;
    if (decision === 'true') {
      result = await reservationUnitAction.adminAcceptRequestAsHouseOwner(
        requestId
      );
    } else {
      result = await reservationUnitAction.adminRefuseRequestAsHouseOwner(
        requestId,
        req.body.note || ''
      );
    }
    return res.status(200).json(result);
  } catch (err) {
    return next();
  }
};
