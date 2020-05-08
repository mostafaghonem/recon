const _ = require('lodash');
const CryptoJS = require('crypto-js');
const { paymentDefaults } = require('../../../shared/constants');
const makeHmacValidation = require('./hmac-validation');

const hmacValidation = makeHmacValidation({
  _,
  paymentDefaults,
  CryptoJS
});

module.exports = {
  hmacValidation
};
