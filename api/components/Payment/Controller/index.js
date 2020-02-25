const useCase = require('../use-case');

exports.paymentToken = async (req, res) => {
  const reservationId = req.params.reservationId;
  const tokenForOperation = await useCase.getPaymentOperationToken(
    reservationId
  );
  return res.status(200).json({ token: tokenForOperation });
};
