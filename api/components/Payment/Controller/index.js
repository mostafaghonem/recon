const useCase = require('../use-case');

exports.paymentToken = async (req, res) => {
  const reservationId = req.params.reservationId;
  const tokenForOperation = await useCase.getPaymentOperationToken(
    reservationId
  );
  return res.status(200).json({ token: tokenForOperation });
};

exports.transactionProcess = async (req, res) => {
  const id = req.query.id;
  const txnResponseCode = req.query.txn_response_code;
  const success = req.query.success;
  console.log(id, txnResponseCode, success);
  console.log(req.query);
  res.status(400).json('test');
};
