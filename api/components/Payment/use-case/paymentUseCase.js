const Model = require('../Model');

const paymentMethodMaker = ({
  axios,
  ObjectId,
  completePayment,
  costOfOperation
}) => {
  const getPaymentOperationToken = async reservationId => {
    {
      /** **********step1************** */
      // console.log('start step1');
      const token =
        'ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6VXhNaUo5LmV5SndjbTltYVd4bFgzQnJJam8wTlRBeExDSmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2libUZ0WlNJNklqRTFOelV5TVRJNU9EZ3VORFU0TlRFM0luMC5TSFdLRlBnWFVBOENxWTRadWw0YnFWeEZkQzdDVU51N1MwSVlrdENIYW9MdS01NEFlR1RYMUs1aFlxTVliTVk2X0xvWXhSQ0NsSmFMdGMyY1gwOW9iQQ==';
      const responseStep1 = await axios.default.post(
        'https://accept.paymobsolutions.com/api/auth/tokens',
        {
          api_key: token
        }
      );
      // console.log('done step1');
      const tokenFromStep1 = responseStep1.data.token;
      const cost = await costOfOperation(reservationId);

      /** **********step2************** */
      const bodyStep2 = {
        auth_token: tokenFromStep1,
        delivery_needed: 'false',
        merchant_id: '4501',
        amount_cents: cost * 100,
        currency: 'EGP',
        merchant_order_id: ObjectId(),
        items: []
      };
      const responseStep2 = await axios.default.post(
        'https://accept.paymobsolutions.com/api/ecommerce/orders',
        bodyStep2
      );
      const orderResponseId = responseStep2.data.id;
      await Model.createOne({
        document: { orderId: orderResponseId, reservationId }
      });
      // console.log('done step2');
      /** **********step3************** */
      const bodyStep3 = {
        auth_token: tokenFromStep1,
        amount_cents: cost * 100,
        expiration: 3600,
        order_id: orderResponseId,
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
        currency: 'EGP',
        integration_id: 8310 // number of integration
      };
      const responseStep3 = await axios.default.post(
        'https://accept.paymobsolutions.com/api/acceptance/payment_keys',
        bodyStep3
      );
      const tokenFromStep3 = responseStep3.data.token;
      return tokenFromStep3;
    }
  };
  const confirmPayment = async orderId => {
    const find = await Model.getOne({ query: { orderId } });
    if (find) {
      completePayment(find.reservationId);
    }
  };
  return { getPaymentOperationToken, confirmPayment };
};

module.exports = paymentMethodMaker;
