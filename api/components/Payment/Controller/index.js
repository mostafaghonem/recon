const useCase = require('../use-case');

exports.paymentToken = async (req, res) => {
  const reservationId = req.params.reservationId;
  const tokenForOperation = await useCase.getPaymentOperationToken(
    reservationId
  );
  return res.status(200).json({ token: tokenForOperation });
};

exports.transactionProcess = async (req, res) => {
  console.log('body transaction process', req.body);
  console.log('Query transaction process', req.query);
  res.status(400).json('test');
};

exports.transactionProcessCallBack = async (req, res) => {
  console.log('body transaction call back process', req.body);
  console.log('Query transaction call back process', req.query);
  res.status(200).json('test');
};
