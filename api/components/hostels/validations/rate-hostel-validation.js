// const { Builder } = require('validation-helpers');
// const { defaultConstants } = require('../../../shared/constants');

module.exports = ({ _, Builder, ValidatorHelper, ObjectId }) => ({ body }) => {
  const error = {};
  const scheme = {
    hostelId: {
      value: body.hostelId,
      rules: new Builder().required().rules
    },
    rate: {
      value: body.rate,
      rules: new Builder()
        .required('يجب ادخال التقييم')
        .isNumber('يجب ان يكون التقييم رقم')
        .min(1, 'يجب ان يكون التقييم 1 علي الاقل')
        .max(5, 'يجب ان يكون التقييم 5 علي الاكثر').rules
    }
  };

  Object.keys(scheme).forEach(key => {
    const ele = scheme[key];
    const { errors, isValid } = ValidatorHelper(ele.value, ele.rules);
    if (!isValid) error[key] = errors;
    if (key === 'hostelId' && ele.value && !ObjectId.isValid(ele.value))
      error[key] = ['hostelId should be a valid ObjectId'];
  });

  return {
    error: _.isEmpty(error) ? undefined : error
  };
};
