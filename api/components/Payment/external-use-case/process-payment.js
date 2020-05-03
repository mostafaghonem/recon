module.exports = ({ getPaymentToken, logger }) => async ({
  reservationId,
  userId,
  paymentId,
  payload,
  timeLimit
}) => {
  // eslint-disable-next-line no-nested-ternary
  const currency =
    // eslint-disable-next-line no-nested-ternary
    payload && payload.currency
      ? payload.currency === 'le'
        ? 'EGP'
        : payload.currency
      : 'EGP';

  const params = {
    reservationId,
    userId,
    paymentId,
    payload,
    currency,
    timeLimit
  };
  const paymentToken = await getPaymentToken(params);

  logger.info(
    `New Payment Token: ${paymentToken}\n\nIt has been generated for payment, now to generate paying form to be completed${JSON.stringify(
      params,
      undefined,
      4
    )}`
  );
  //   const iframe = await getIframe()
};
