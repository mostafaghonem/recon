// const { Builder: __Builder } = require('validation-helpers');
// const { defaultConstants } = require('../../../shared/constants');

// const _genderEnum = Object.values(defaultConstants.GENDER_TYPES);
// const _jobTypeEnum = Object.values(defaultConstants.JOB_TYPES);
const { Builder, ValidatorHelper } = require('validation-helpers');
const _ = require('lodash');

module.exports = ({
  _,
  ValidatorHelper,
  Builder,
  genderEnum,
  jobTypeEnum
}) => ({ body }) => {
  const error = {};
  const scheme = {
    image: {
      value: body.image,
      rules: new Builder().required().isURL().rules
    },
    fullName: {
      value: body.fullName,
      rules: new Builder()
        .required('يجب ادخال الاسم بالكامل')
        .minLength(2, 'يجب ان يكون الاسم 2 احرف علي الاقل')
        .maxLength(50, 'يجب ان يكون الاسم 50 حرف كحد اقصي').rules
    },
    email: {
      value: body.email,
      rules: new Builder()
        .required('يجب ادخال البريد الإلكتروني')
        .isEmail('بريد إلكتروني غير صالح').rules
    },
    birthDateTs: {
      value: body.birthDateTs,
      rules: new Builder().required().isNumber().rules
    },
    gender: {
      value: body.gender,
      rules: new Builder().required().isMember(genderEnum).rules
    },
    'job.type': {
      value: body.job ? body.job.type : '',
      rules: new Builder().required().isMember(jobTypeEnum).rules
    },
    'job.description': {
      value: body.job ? body.job.description : '',
      rules: new Builder().minLength(5).maxLength(500).rules
    },
    government: {
      value: body.government,
      rules: new Builder()
        .required()
        .minLength(3)
        .maxLength(100).rules
    },
    identificationImages: {
      value: body.identificationImages,
      rules: new Builder().isArray().rules
    },
    code: {
      value: body.code,
      rules: new Builder().min(1000).max(9999).rules
    }
    // TODO: Edit error messages
  };
  if (body.identificationImages) {
    body.identificationImages.forEach((url, index) => {
      scheme[`body.identificationImages.${index}`] = {
        value: url,
        rules: new Builder().isURL('Should be a valid URL').rules
      };
    });
  }

  Object.keys(scheme).forEach(key => {
    const ele = scheme[key];
    const { errors, isValid } = ValidatorHelper(ele.value, ele.rules);
    if (!isValid) error[key] = errors;
    if (
      key === 'job.description' &&
      ele.value == '' &&
      body.job &&
      body.job.type &&
      body.job.type !== 'renter'
    ) {
      error[key] = ['يجب إدخال اسم الشركة'];
      if (body.job.type === 'student') error[key] = ['يجب إدخال اسم الكلية'];
    }
  });

  return {
    error: _.isEmpty(error) ? undefined : error
  };
};
