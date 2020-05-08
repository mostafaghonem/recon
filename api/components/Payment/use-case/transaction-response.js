/* eslint-disable no-unused-vars */
const Model = require('../Model');
//! only require Entity/model

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  completeHostelPayment,
  completeUnitPayment,
  completeOfficePayment,
  paymentDefaults
}) => async ({ data }) => {
  let errorMessage = paymentDefaults.ERRORS.AR.FALLBACK;
  const success = data.success;
  if (success && success === 'true') {
    const orderId = data.merchant_order_id;
    const order = Model.find({ orderId });
    if (order && order.hostelId) {
      completeHostelPayment({ payload: order });
    }

    if (order && order.unitId) {
      completeUnitPayment({ payload: order });
    }

    if (order && order.officeId) {
      completeOfficePayment({ payload: order });
    }
  }

  const errorCode = paymentDefaults.ERRORS.CODES.find(
    o => parseInt(o, 10) === data.txn_response_code
  );

  if (errorCode) {
    errorMessage = paymentDefaults.ERRORS.AR[`CODE_${errorCode}`];
  }

  if (
    data['data.message'] &&
    data['data.message'].toLowerCase() ===
      paymentDefaults.ERRORS.EN.SECURITY_RISK.toLowerCase()
  ) {
    errorMessage = paymentDefaults.ERRORS.AR.SECURITY_RISK;
  }

  throw new ApplicationError(errorMessage, 403);
};
