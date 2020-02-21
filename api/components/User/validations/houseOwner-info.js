const { Builder, ValidatorHelper } = require('validation-helpers');

module.exports = ({ _, Builder, ValidatorHelper, ObjectId }) => ({
  params
}) => {
  const error = {};

  const scheme = {
    id: {
      value: params.id,
      rules: new Builder().rules
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
