// eslint-disable-next-line no-unused-vars
module.exports = ({ redis }) => async paymentId => {
  const reservationCachedData = await redis.getAsync(`${paymentId}-paymentId`);

  return JSON.parse(reservationCachedData).shouldPayPrice;
};
