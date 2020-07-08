module.exports = ({ _, ValidatorHelper, Builder }) => ({ body }) => {
  const error = {};

  const scheme = {
    username: {
      value: body.username,
      rules: new Builder().required('يجب ادخال رقم الهاتف').rules
    },
    password: {
      value: body.password,
      rules: new Builder().required('يجب ادخال كلمة السر').rules
    }
  };

  Object.keys(scheme).forEach(key => {
    const ele = scheme[key];
    const { errors, isValid } = ValidatorHelper(ele.value, ele.rules);
    if (!isValid) {
      error[key] = errors;
    }
  });

  return { error: _.isEmpty(error) ? undefined : error };
};
