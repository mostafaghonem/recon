const CryptoJS = require('crypto-js');

const transactionKeys = [
  'amount_cents',
  'created_at',
  'currency',
  'error_occured',
  'has_parent_transaction',
  'id',
  'integration_id',
  'is_3d_secure',
  'is_auth',
  'is_capture',
  'is_refunded',
  'is_standalone_payment',
  'is_voided',
  'order.id',
  'owner',
  'pending',
  'source_data.pan',
  'source_data.sub_type',
  'source_data.type',
  'success'
];

class TransactionValidation {
  static get hmacSecret() {
    return process.env.PAYMOB_HMAC_SECRET || '9B56F5ED0FEA53097E49F5EDEDFDD4D2';
  }

  static validateHMAC(body, hmac, keys) {
    const string = keys
      .map(key => {
        const nesting = key.toString().split('.');
        if (nesting.length && nesting.length > 1 && body[nesting[0]]) {
          console.log('sub', key, body[nesting[0]][nesting[1]]);
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

  static hashString(string) {
    const hash = CryptoJS.HmacSHA512(string, TransactionValidation.hmacSecret);
    return hash;
  }
}

const response = TransactionValidation.validateHMAC(
  test.obj,
  requestHMAC,
  transactionKeys
);
console.log('is hmac valid', response);
