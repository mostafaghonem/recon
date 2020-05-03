/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case
 *
 *
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */
const logger = require('../../../startup/logger');
const { ApplicationError } = require('../../../shared/errors');
const { getPaymentToken } = require('../use-case');

const makeProcessPayment = require('./process-payment');

const processPayment = makeProcessPayment({
  getPaymentToken,
  ApplicationError,
  logger
});

const PaymentExternalService = Object.freeze({
  processPayment
});

module.exports = PaymentExternalService;
