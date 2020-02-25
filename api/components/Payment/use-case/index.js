const axios = require('axios');
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;
const paymentUseCaseMaker = require('./paymentUseCase');

const { getPaymentOperationToken } = paymentUseCaseMaker({ axios, ObjectId });

module.exports = { getPaymentOperationToken };
