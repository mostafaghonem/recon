const axios = require('axios');
const mongoose = require('mongoose');
const {
  completePayment
} = require('../../HostelReservation/hostel-reservation-external-use-cases');

const { ObjectId } = mongoose.Types;
const paymentUseCaseMaker = require('./paymentUseCase');

const { getPaymentOperationToken, confirmPayment } = paymentUseCaseMaker({
  axios,
  ObjectId,
  completePayment
});

module.exports = { getPaymentOperationToken, confirmPayment };
