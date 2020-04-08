module.exports = ({ _, Builder, ValidatorHelper }) => ({ body }) => {
  const error = {};

  const scheme = {
    phone: {
      value: body.phone,
      rules: new Builder()
        .required('يجب ادخال رقم الهاتف')
        .isMobile('رقم هاتف غير صالح').rules
    },
    email: {
      value: body.email,
      rules: new Builder()
        .required('يجب ادخال البريد الإلكتروني')
        .isEmail('بريد إلكتروني غير صالح').rules
    }
  };

  Object.keys(scheme).forEach(key => {
    const ele = scheme[key];
    const { errors, isValid } = ValidatorHelper(ele.value, ele.rules);
    if (!isValid) {
      error[key] = errors;
    }
    if (key === 'phone' && ele.value && !String(ele.value).startsWith('+201'))
      error[key] = ['رقم هاتف غير صالح'];
  });

  return { error: _.isEmpty(error) ? undefined : error };
};
