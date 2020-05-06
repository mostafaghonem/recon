const axios = require('axios');
const mongoose = require('mongoose');
const {
  PAYMENT: paymentDefaults
} = require('../../../shared/constants/defaults');
const logger = require('../../../startup/logger');
const { ApplicationError } = require('../../../shared/errors');

const { getUsersByIds } = require('../../User/user-external-use-cases');
const {
  completePayment
} = require('../../HostelReservation/hostel-reservation-external-use-cases');

const { ObjectId } = mongoose.Types;

const makeTransactionProcess = require('./transaction-process');
const makeTransactionResponse = require('./transaction-response');
const paymentUseCaseMaker = require('./paymentUseCase');

const {
  getPaymentToken,
  getPaymentOperationToken,
  confirmPayment
} = paymentUseCaseMaker({
  axios,
  ObjectId,
  completePayment,
  getUsersByIds,
  paymentDefaults,
  ApplicationError
});

const transactionProcess = makeTransactionProcess({
  ApplicationError,
  logger
});
const transactionResponse = makeTransactionResponse({
  ApplicationError,
  logger
});

module.exports = {
  getPaymentToken,
  getPaymentOperationToken,
  transactionProcess,
  transactionResponse,
  confirmPayment
};

// costOfOperation,
