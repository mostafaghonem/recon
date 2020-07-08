module.exports = ({ _, Builder, ValidatorHelper }) => ({ body }) => {
  const error = {};

  const scheme = {
    username: {
      value: body.username,
      rules: new Builder()
        .required('يجب ادخال اسم المستخدم')
        .isMobile('رقم هاتف غير صالح').rules
    }
  };

  Object.keys(scheme).forEach(key => {
    const ele = scheme[key];
    const { errors, isValid } = ValidatorHelper(ele.value, ele.rules);
    if (!isValid) {
      error[key] = errors;
    }
    if (
      key === 'username' &&
      ele.value &&
      !String(ele.value).startsWith('+201')
    )
      error[key] = ['رقم هاتف غير صالح'];
  });

  return { error: _.isEmpty(error) ? undefined : error };
};
