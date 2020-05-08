/* eslint-disable no-unused-vars */
const Model = require('../Model');
//! only require Entity/model

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, logger, completePayment }) => async ({
  orderId
}) => {
  const find = await Model.getOne({ query: { orderId } });
  if (find) {
    completePayment(find.reservationId);
  }
};
