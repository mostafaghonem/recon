const paymentSchema = require('../schema');
const _GenericModel = require('../../shared/models/GenericModel');

module.exports = ({ GenericModel = _GenericModel }) => {
  class PaymentModel extends GenericModel {}
  return new PaymentModel(paymentSchema);
};
