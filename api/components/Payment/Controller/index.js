const logger = require('../../../startup/logger');
const { ApplicationError } = require('../../../shared/errors');

const makeTransactionProcess = require('./transaction-process');
const makeTransactionResponse = require('./transaction-response');

// exports.paymentToken = async (req, res) => {
//   const reservationId = req.params.reservationId;
//   const tokenForOperation = await useCase.getPaymentOperationToken(
//     reservationId
//   );
//   return res.status(200).json({ token: tokenForOperation });
// };

exports.transactionProcess = makeTransactionProcess({
  ApplicationError,
  logger
});

exports.transactionResponse = makeTransactionResponse({
  ApplicationError,
  logger
});
