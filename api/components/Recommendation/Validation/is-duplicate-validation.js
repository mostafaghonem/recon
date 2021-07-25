// const { Builder, ValidatorHelper } = require('validation-helpers');

module.exports = ({ _, Builder, ValidatorHelper }) => ({ query }) => {
  const error = {};
  const { key, keys, value, values } = query;

  const scheme = {
    key: {
      value: query.key,
      rules: new Builder().rules
    },
    value: {
      value: query.value,
      rules: new Builder().rules
    }
  };

  if ((!key && !keys) || (!value && !values)) {
    error[key] = 'يحب اختيار مايتم تفقده';
  }

  Object.keys(scheme).forEach(o => {
    const ele = scheme[o];
    const { errors, isValid } = ValidatorHelper(ele.value, ele.rules);
    if (!isValid) error[o] = errors;
  });

  return { error: _.isEmpty(error) ? undefined : error };
};
