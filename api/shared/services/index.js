const makeSmsService = require('./sms');
const makeEmailService = require('./email');

const smsService = makeSmsService({});
const emailService = makeEmailService({});

const Services = {
  smsService,
  emailService
};

module.exports = Services;
