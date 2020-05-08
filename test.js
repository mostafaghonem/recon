const CryptoJS = require('crypto-js');

class TransactionValidation {
  static get hmacSecret() {
    return process.env.PAYMOB_HMAC_SECRET || '9B56F5ED0FEA53097E49F5EDEDFDD4D2';
  }

  static validateHMAC(body, hmac, keys) {
    const string = keys
      .map(key => {
        const nesting = key.toString().split('.');
        if (nesting.length && nesting.length > 1 && body[nesting[0]]) {
          return body[nesting[0]][nesting[1]];
        }
        return body[key];
      })
      .join('');
    const hash = CryptoJS.HmacSHA512(string, TransactionValidation.hmacSecret);
    const hastString = CryptoJS.enc.Hex.stringify(hash);
    if (hastString === hmac) {
      return true;
    }
    return false;
  }
}
