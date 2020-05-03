const axios = require('axios');
const mongoose = require('mongoose');
const {
  PAYMENT: paymentDefaults
} = require('../../../shared/constants/defaults');
const { ApplicationError } = require('../../../shared/errors');
const { getUsersByIds } = require('../../User/user-external-use-cases');
const {
  completePayment
} = require('../../HostelReservation/hostel-reservation-external-use-cases');

const { ObjectId } = mongoose.Types;
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

module.exports = { getPaymentToken, getPaymentOperationToken, confirmPayment };

// costOfOperation,
