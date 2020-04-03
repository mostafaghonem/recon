const useCase = require('../use-case');

exports.paymentToken = async (req, res) => {
  const reservationId = req.params.reservationId;
  const tokenForOperation = await useCase.getPaymentOperationToken(
    reservationId
  );
  return res.status(200).json({ token: tokenForOperation });
};

exports.transactionProcess = async (req, res) => {
  res.status(400).json('test');
};

exports.transactionProcessCallBack = async (req, res) => {
  if (req.query.success === 'true') {
    useCase.confirmPayment(req.query.order);
    // TODO need to redirect to home to refer that payment is success
  }
  // TODO need to redirect to home to refer that payment is fail
  res.status(200).json('test');
};
