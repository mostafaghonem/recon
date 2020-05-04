module.exports = ({
  getPaymentToken,
  createAmanPayRequest,
  paymentDefaults,
  logger
}) => async ({
  hostelReservationId,
  unitReservationId,
  officeReservationId,
  userId,
  paymentId,
  payload,
  timeLimit
}) => {
  const response = {};
  // eslint-disable-next-line no-nested-ternary
  const currency =
    // eslint-disable-next-line no-nested-ternary
    payload && payload.currency
      ? payload.currency === 'le'
        ? 'EGP'
        : payload.currency
      : 'EGP';

  const params = {
    hostelReservationId,
    unitReservationId,
    officeReservationId,
    userId,
    paymentId,
    payload,
    currency,
    timeLimit
  };
  const paymentKey = await getPaymentToken(params);

  logger.info(
    `New Payment Token: ${paymentKey}\n\nIt has been generated for payment, now to generate paying form to be completed${JSON.stringify(
      params,
      undefined,
      4
    )}`
  );

  response.paymentKey = paymentKey;
  if (payload.method === 'credit') {
    response.iframeSrc = `${paymentDefaults.PAYMOB.IFRAME_URL}${paymentDefaults.PAYMOB.DEFAULT_FORM_ID}?payment_key=${paymentKey}`;
    return response;
  }

  if (payload.method === 'kiosk') {
    const payRequest = await createAmanPayRequest({ paymentKey });
    if (payRequest.pending === true && payRequest.success === false) {
      response.billReference = payRequest.data.bill_reference;
      return response;
    }
  }

  return false;
};
