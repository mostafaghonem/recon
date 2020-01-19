const Services = {
  smsService: new (require('./sms'))()
};

module.exports = Services;
