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
    HMAC_SECRET: process.env.PAYMOB_HMAC_SECRET,
    CARD_INTEGRATION_ID: process.env.PAYMOB_CARD_INTEGRATION_ID
      ? parseInt(process.env.PAYMOB_CARD_INTEGRATION_ID, 10)
      : undefined,
    KIOSK_INTEGRATION_ID: process.env.PAYMOB_KIOSK_INTEGRATION_ID
      ? parseInt(process.env.PAYMOB_KIOSK_INTEGRATION_ID, 10)
      : undefined,
    transactionKeys: [
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
      // order
    ]
  },
  ERRORS: {
    EN: {
      SECURITY_RISK: 'Transaction did not pass risk checks',
      CODE_1: 'There was an error processing the transaction',
      CODE_2: 'Contact card issuing bank',
      CODE_4: 'Expired Card',
      CODE_5: 'Insufficient Funds',
      CODE_6: 'Payment is already being processed'
    },
    AR: {
      CODE_1: 'عذراً ولكن لم تنجح عملية الدفع. حدث خطاً ما أثناء الدفع',
      CODE_2: 'عذراً ولكن لم تنجح عملية الدفع. يرجى التواصل مع البنك',
      CODE_4: 'عذراً ولكن لم تنجح عملية الدفع. البطاقة منتهية الصلاحية',
      CODE_5: 'عذراً ولكن لم تنجح عملية الدفع. لا يوجد رصيد كافى',
      CODE_6:
        'عذراً ولكن عملية الدقع تحتاج ان تستغرق وقت أكثر سنبلغك حين تتم بنجاح.',
      SECURITY_RISK:
        'عذراً ولكن لم تنجح عملية الدفع. البطاقة غير صالحة لأسباب أمنية',
      FALLBACK: 'عذراً ولكن لم تنجح عملية الدفع حدث خطاً ما'
    },
    CODES: [1, 2, 3, 4, 5]
  }
};

const PayMobToken = process.env.PAYMOB_TOKEN;
const MerchantID = process.env.PAYMOB_MERCHANT_ID;
const CardIntegrationID = process.env.PAYMOB_CARD_INTEGRATION_ID;
const KioskIntegrationID = process.env.PAYMOB_KIOSK_INTEGRATION_ID;
const HmacSecret = process.env.PAYMOB_HMAC_SECRET;
if (
  !PayMobToken ||
  !MerchantID ||
  !CardIntegrationID ||
  !KioskIntegrationID ||
  !HmacSecret
) {
  throw new ApplicationError(
    'You must provide the env variables PAYMOB_TOKEN, PAYMOB_HMAC_SECRET, PAYMOB_MERCHANT_ID, PAYMOB_CARD_INTEGRATION_ID and PAYMOB_KIOSK_INTEGRATION_ID for payment solutions, check https://captain.dev.sknhost.com for values'
  );
}
