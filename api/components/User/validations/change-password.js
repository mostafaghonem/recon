module.exports = ({ _, Builder, ValidatorHelper }) => ({ body }) => {
  const error = {};

  const scheme = {
    username: {
      value: body.username,
      rules: new Builder().required('يجب ادخال اسم المستخدم').rules
    },
    password: {
      value: body.password,
      rules: new Builder()
        .required()
        .minLength(5)
        .maxLength(60).rules
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
