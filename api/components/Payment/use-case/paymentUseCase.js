const Model = require('../Model');

const paymentMethodMaker = ({
  axios,
  ObjectId,
  completePayment,
  costOfOperation,
  paymentDefaults,
  getUsersByIds,
  ApplicationError
}) => {
  const getPaymentOperationToken = async (reservationId, currency = 'EGP') => {
    /** **********step1************** */
    // console.log('start step1');
    const responseStep1 = await axios.default.post(
      paymentDefaults.PAYMOB.AUTHENTICATE_TOKEN_URL,
      {
        api_key: paymentDefaults.PAYMOB.TOKEN
      }
    );
    // console.log('done step1');
    const paymentAuthToken = responseStep1.data.token;
    const cost = await costOfOperation(reservationId);

    /** **********step2************** */
    const bodyStep2 = {
      currency,
      auth_token: paymentAuthToken,
      delivery_needed: 'false',
      merchant_id: paymentDefaults.PAYMOB.MERCHANT_ID,
      amount_cents: cost * 100,
      merchant_order_id: ObjectId(),
      items: []
    };
    const responseStep2 = await axios.default.post(
      paymentDefaults.PAYMOB.ORDER_REGISTERATION_URL,
      bodyStep2
    );
    const orderResponseId = responseStep2.data.id;
    await Model.createOne({
      document: { orderId: orderResponseId, reservationId }
    });
    // console.log('done step2');
    /** **********step3************** */
    const bodyStep3 = {
      auth_token: paymentAuthToken,
      amount_cents: cost * 100,
      expiration: 3600,
      order_id: orderResponseId,
      currency,
      billing_data: {
        apartment: '803',
        email: 'claudette09@exa.com',
        floor: '42',
        first_name: 'Clifford',
        street: 'Ethan Land',
        building: '8028',
        phone_number: '+86(8)9135210487',
        shipping_method: 'PKG',
        postal_code: '01898',
        city: 'Jaskolskiburgh',
        country: 'CR',
        last_name: 'Nicolas',
        state: 'Utah'
      },
      integration_id: paymentDefaults.PAYMOB.INTEGRATION_ID // number of integration
    };
    const responseStep3 = await axios.default.post(
      paymentDefaults.PAYMOB.PAYMENT_KEY_URL,
      bodyStep3
    );
    const paymentKey = responseStep3.data.token;
    return paymentKey;
  };
  const getPaymentToken = async ({
    userId,
    hostelReservationId,
    unitReservationId,
    officeReservationId,
    paymentId,
    payload,
    currency,
    timeLimit
  }) => {
    const usersData = await getUsersByIds([userId]);
    const userData = usersData[userId];
    if (!userData) {
      throw new ApplicationError(
        'عذراً ولكن حدث خطا ما فى محاولة الدفع الرجاء التأكد من تسجيل الدخول والمحاولة مرة أخرى ',
        403
      );
    }

    let IntegrationId;

    if (payload.method === 'credit')
      IntegrationId = paymentDefaults.PAYMOB.CARD_INTEGRATION_ID;

    if (payload.method === 'kiosk')
      IntegrationId = paymentDefaults.PAYMOB.KIOSK_INTEGRATION_ID;

    if (!IntegrationId) {
      throw new ApplicationError(
        'عذراً ولكن حدث خطا ما فى محاولة الدفع الرجاء التأكد من إختيار طريقة الدفع الصحيحة',
        403
      );
    }
    /** **********step1************** */
    // console.log('start step1');
    const responseStep1 = await axios.default.post(
      paymentDefaults.PAYMOB.AUTHENTICATE_TOKEN_URL,
      {
        api_key: paymentDefaults.PAYMOB.TOKEN
      }
    );
    // console.log('done step1');
    const paymentAuthToken = responseStep1.data.token;
    // const cost = await costOfOperation(reservationId, reservationType);

    /** **********step2************** */
    const bodyStep2 = {
      currency,
      auth_token: paymentAuthToken,
      delivery_needed: 'false',
      merchant_id: paymentDefaults.PAYMOB.MERCHANT_ID,
      amount_cents: payload.totalAfterExtras * 100,
      merchant_order_id: ObjectId(),
      items: []
    };
    const responseStep2 = await axios.default.post(
      paymentDefaults.PAYMOB.ORDER_REGISTERATION_URL,
      bodyStep2
    );
    const orderResponseId = responseStep2.data.id;
    let reservationType = payload.hostelId ? 'hostel' : '';
    reservationType =
      payload.unitId && reservationType === '' ? 'unit' : reservationType;
    reservationType =
      payload.officeId && reservationType === '' ? 'office' : reservationType;
    await Model.createOne({
      document: {
        hostelReservationId,
        unitReservationId,
        officeReservationId,
        reservationType,
        paymentId,
        orderId: orderResponseId,
        method: payload.method,
        reservation: payload,
        timeLimit
      }
    });
    // console.log('done step2');
    /** **********step3************** */
    const bodyStep3 = {
      auth_token: paymentAuthToken,
      amount_cents: payload.totalAfterExtras * 100,
      expiration: 3600,
      order_id: orderResponseId,
      currency,
      billing_data: {
        apartment: '803',
        email: userData.email,
        floor: '42',
        first_name: userData.fullName.split(/\s+/)[0],
        street: userData.fullName,
        building: '8028',
        phone_number: userData.phone || '+86(8)9135210487',
        shipping_method: 'PKG',
        // postal_code: '12566',
        city: userData.government,
        country: 'EG',
        last_name: userData.fullName.split(/\s+/)[1] || '',
        state: userData.government
      },
      integration_id: IntegrationId // number of integration
    };
    const responseStep3 = await axios.default.post(
      paymentDefaults.PAYMOB.PAYMENT_KEY_URL,
      bodyStep3
    );

    const paymentKey = responseStep3.data.token;
    return paymentKey;
  };
  const confirmPayment = async orderId => {
    const find = await Model.getOne({ query: { orderId } });
    if (find) {
      completePayment(find.reservationId);
    }
  };
  return { getPaymentToken, getPaymentOperationToken, confirmPayment };
};

module.exports = paymentMethodMaker;
