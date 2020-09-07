// const { Builder: __Builder } = require('validation-helpers');
// const { defaultConstants } = require('../../../shared/constants');

// const _genderEnum = Object.values(defaultConstants.GENDER_TYPES);
// const _jobTypeEnum = Object.values(defaultConstants.JOB_TYPES);

module.exports = ({ _, ValidatorHelper, Builder }) => ({ body }) => {
  const error = {};

  const scheme = {
    fullName: {
      value: body.fullName,
      rules: new Builder()
        .required('يجب ادخال الاسم بالكامل')
        .minLength(2, 'يجب ان يكون الاسم 2 احرف علي الاقل')
        .maxLength(50, 'يجب ان يكون الاسم 50 حرف كحد اقصي').rules
    },
    username: {
      value: body.username,
      rules: new Builder().required('يجب ادخال إسم المستخدم').rules
    },
    password: {
      value: body.password,
      rules: new Builder()
        .required()
        .minLength(5)
        .maxLength(60).rules
    },
    rank: {
      value: body.rank,
      rules: new Builder().required('يجب ادخال درجة/رتبة المستخدم').rules
    },
    branch: {
      value: body.branch,
      rules: new Builder().required('يجب ادخال فرع المستخدم').rules
    },
    permissions: {
      value: body.permissions,
      rules: new Builder().required('يجب ادخال صلاحيات المستخدم').rules
    }
    // TODO: Edit error messages
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
