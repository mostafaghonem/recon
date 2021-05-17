// const { Builder, ValidatorHelper } = require('validation-helpers');

module.exports = ({ _, Builder, ValidatorHelper, ObjectId }) => ({ query }) => {
  const error = {};

  const scheme = {
    key: {
      value: query.key,
      rules: new Builder().required().rules
    },
    value: {
      value: query.value,
      rules: new Builder().required().rules
    }
  };

  Object.keys(scheme).forEach(key => {
    const ele = scheme[key];
    const { errors, isValid } = ValidatorHelper(ele.value, ele.rules);
    if (!isValid) error[key] = errors;
    if (key === 'id' && !ObjectId.isValid(ele.value))
      error[key] = ['id should be a valid ObjectId'];
  });

  return { error: _.isEmpty(error) ? undefined : error };
};
