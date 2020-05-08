const axios = require('axios');
const mongoose = require('mongoose');
const { paymentDefaults } = require('../../../shared/constants');
const logger = require('../../../startup/logger');
const { ApplicationError } = require('../../../shared/errors');

const { getUsersByIds } = require('../../User/user-external-use-cases');
const {
  completeHostelPayment
} = require('../../HostelReservation/hostel-reservation-external-use-cases');

const { ObjectId } = mongoose.Types;

const makeTransactionProcess = require('./transaction-process');
const makeTransactionResponse = require('./transaction-response');
const makeConfirmPayment = require('./confirm-payment');
const paymentUseCaseMaker = require('./paymentUseCase');

const { getPaymentToken, getPaymentOperationToken } = paymentUseCaseMaker({
  axios,
  ObjectId,
  completeHostelPayment,
  completeUnitPayment: () => {},
  completeOfficePayment: () => {},
  getUsersByIds,
  paymentDefaults,
  ApplicationError
});

const confirmPayment = makeConfirmPayment({ ApplicationError, logger });

const transactionProcess = makeTransactionProcess({
  ApplicationError,
  logger,
  paymentDefaults,
  completeHostelPayment,
  completeUnitPayment: () => {},
  completeOfficePayment: () => {}
});
const transactionResponse = makeTransactionResponse({
  ApplicationError,
  logger,
  paymentDefaults,
  completeHostelPayment,
  completeUnitPayment: () => {},
  completeOfficePayment: () => {}
});

module.exports = {
  getPaymentToken,
  getPaymentOperationToken,
  transactionProcess,
  transactionResponse,
  confirmPayment
};

// costOfOperation,
