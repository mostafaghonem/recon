const axios = require('axios');
const mongoose = require('mongoose');
const { paymentDefaults } = require('../../../shared/constants');
const logger = require('../../../startup/logger');
const { ApplicationError } = require('../../../shared/errors');

const { getUsersByIds } = require('../../User/user-external-use-cases');
const {
  unitCompletePayment
} = require('../../UnitReservation/ExternalServices');

const {
  completeHostelPayment
} = require('../../HostelReservation/hostel-reservation-external-use-cases');

const { ObjectId } = mongoose.Types;

const makeTransactionResponse = require('./transaction-response');
const paymentUseCaseMaker = require('./paymentUseCase');

const { getPaymentToken } = paymentUseCaseMaker({
  axios,
  ObjectId,
  getUsersByIds,
  paymentDefaults,
  ApplicationError
});

const transactionResponse = makeTransactionResponse({
  ApplicationError,
  logger,
  paymentDefaults,
  completeHostelPayment,
  completeUnitPayment: unitCompletePayment,
  completeOfficePayment: () => {}
});

module.exports = {
  getPaymentToken,
  transactionResponse
};

// costOfOperation,
