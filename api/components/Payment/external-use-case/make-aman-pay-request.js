const Model = require('../Model');

module.exports = ({ axios, paymentDefaults, logger }) => async ({
  paymentKey,
  paymentId
}) => {
  const response = await axios.default.post(
    paymentDefaults.PAYMOB.PAY_REQUEST_URL,
    {
      source: {
        identifier: 'AGGREGATOR',
        subtype: 'AGGREGATOR'
      },
      payment_token: paymentKey
    }
  );

  const update = await Model.updateOneByFilter({
    filter: {
      paymentId
    },
    update: {
      order: response.data
    }
  });
  return response.data;
};
