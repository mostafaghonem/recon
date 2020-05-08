const ApplicationError = require('../errors/ApplicationError');

module.exports = {
  PAYMOB: {
    AUTHENTICATE_TOKEN_URL:
      'https://accept.paymobsolutions.com/api/auth/tokens',
    ORDER_REGISTERATION_URL:
      'https://accept.paymobsolutions.com/api/ecommerce/orders',
    PAYMENT_KEY_URL:
      'https://accept.paymobsolutions.com/api/acceptance/payment_keys',
    IFRAME_URL: 'https://accept.paymobsolutions.com/api/acceptance/iframes/',
    PAY_REQUEST_URL:
      'https://accept.paymobsolutions.com/api/acceptance/payments/pay',
    DEFAULT_FORM_ID: process.env.PAYMOB_DEFAULT_FORM_ID,
    MERCHANT_ID: process.env.PAYMOB_MERCHANT_ID,
    TOKEN: process.env.PAYMOB_TOKEN,
    CARD_INTEGRATION_ID: process.env.PAYMOB_CARD_INTEGRATION_ID
      ? parseInt(process.env.PAYMOB_CARD_INTEGRATION_ID, 10)
      : undefined,
    KIOSK_INTEGRATION_ID: process.env.PAYMOB_KIOSK_INTEGRATION_ID
      ? parseInt(process.env.PAYMOB_KIOSK_INTEGRATION_ID, 10)
      : undefined
  }
};

const PayMobToken = process.env.PAYMOB_TOKEN;
const MerchantID = process.env.PAYMOB_MERCHANT_ID;
const CardIntegrationID = process.env.PAYMOB_CARD_INTEGRATION_ID;
const KioskIntegrationID = process.env.PAYMOB_KIOSK_INTEGRATION_ID;
if (!PayMobToken || !MerchantID || !CardIntegrationID || !KioskIntegrationID) {
  throw new ApplicationError(
    'You must provide the env variables PAYMOB_TOKEN, PAYMOB_MERCHANT_ID, PAYMOB_CARD_INTEGRATION_ID and PAYMOB_KIOSK_INTEGRATION_ID for payment solutions, check https://captain.dev.sknhost.com for values'
  );
}
