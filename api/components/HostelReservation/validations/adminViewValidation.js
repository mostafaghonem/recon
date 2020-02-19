const { Builder: ___, ValidatorHelper: __ } = require('validation-helpers');

module.exports = ({ _, Builder = ___, ValidatorHelper = __ }) => ({
  query
}) => {
  const error = {};

  const scheme = {
    phone: {
      value: query.phone,
      rules: new Builder().isMobile().rules
    },
    status: {
      value: query.status,
      rules: new Builder()
        .required()
        .isMember(['all', 'active', 'waiting', 'done']).rules
    },
    skip: {
      value: query.skip,
      rules: new Builder().isNumber().min(0).rules
    },
    limit: {
      value: query.limit,
      rules: new Builder().isNumber().min(1).rules
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
