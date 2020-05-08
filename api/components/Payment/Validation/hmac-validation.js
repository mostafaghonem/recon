module.exports = ({ _, paymentDefaults, CryptoJS }) => ({ body, query }) => {
  const keys = paymentDefaults.PAYMOB.transactionKeys;
  const hmac = query.hmac;
  const data = body && body.obj ? body.obj : query;
  const error = {};

  const string = keys
    .map(key => {
      const nesting = key.toString().split('.');
      if (
        nesting.length &&
        nesting.length > 1 &&
        data[nesting[0]] &&
        body &&
        body.obj
      ) {
        return data[nesting[0]][nesting[1]];
      }

      if (query && nesting[1] === 'id') {
        return data.order;
      }
      return data[key];
    })
    .join('');
  const hash = CryptoJS.HmacSHA512(string, paymentDefaults.PAYMOB.HMAC_SECRET);
  const hastString = CryptoJS.enc.Hex.stringify(hash);

  if (hastString !== hmac) {
    error.auth =
      'Something Went Wrong Validating the authenticity of your request';
  }

  return {
    error: _.isEmpty(error) ? undefined : error
  };
};
