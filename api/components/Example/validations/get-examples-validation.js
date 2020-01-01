module.exports = ({ _, ValidatorHelper, Builder }) => ({ query }) => {
  const error = {};

  const scheme = {
    skip: {
      value: query.skip,
      rules: new Builder().required('must pass skip').isNumber().rules
    },
    limit: {
      value: query.limit,
      rules: new Builder().required('must pass limit').isNumber().rules
    }
  };

  Object.keys(scheme).forEach(key => {
    const ele = scheme[key];
    const { errors, isValid } = ValidatorHelper(ele.value, ele.rules);
    if (!isValid) error[key] = errors;
  });

  return { error: _.isEmpty(error) ? undefined : error };
};
