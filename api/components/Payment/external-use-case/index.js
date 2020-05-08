/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case
 *
 *
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */
const axios = require('axios');
const logger = require('../../../startup/logger');
const { ApplicationError } = require('../../../shared/errors');
const { paymentDefaults } = require('../../../shared/constants');
const { getPaymentToken } = require('../use-case');

const makeProcessPayment = require('./process-payment');
const makeAmanPayRequest = require('./make-aman-pay-request');

const createAmanPayRequest = makeAmanPayRequest({
  axios,
  paymentDefaults,
  ApplicationError,
  logger
});

const processPayment = makeProcessPayment({
  getPaymentToken,
  createAmanPayRequest,
  paymentDefaults,
  ApplicationError,
  logger
});

const PaymentExternalService = Object.freeze({
  processPayment,
  createAmanPayRequest
});

module.exports = PaymentExternalService;
