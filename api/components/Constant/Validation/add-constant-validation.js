// const { Builder } = require('validation-helpers');
// const { defaultConstants } = require('../../../shared/constants');

module.exports = ({ _, ErrorText, ValidatorHelper, Builder }) => ({ body }) => {
  const error = {};
  const scheme = {
    type: {
      value: body.type,
      rules: new Builder().required(ErrorText.constant_NUMBER_REQUIRED).rules
    },
    ar: {
      value: body.ar,
      rules: new Builder().required(ErrorText.constant_DATE_REQUIRED).rules
    },
    value: {
      value: body.value,
      rules: new Builder().rules
    }
  };

  Object.keys(scheme).forEach(key => {
    const ele = scheme[key];
    const { errors, isValid } = ValidatorHelper(ele.value, ele.rules);
    if (!isValid) error[key] = errors;
  });

  return {
    error: _.isEmpty(error) ? undefined : error
  };
};
