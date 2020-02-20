// const { Builder } = require('validation-helpers');
// const { defaultConstants } = require('../../../shared/constants');

module.exports = ({
  _,
  ValidatorHelper,
  Builder,
  currencies,
  freeServices,
  generalServices,
  hostelServices,
  entertainmentServices,
  foodServices
}) => ({ body }) => {
  const error = {};
  const scheme = {
    name: {
      value: body.name,
      rules: new Builder()
        .required('يجب ادخال الاسم')
        .minLength(2, 'يجب ان يكون الاسم 2 احرف علي الاقل')
        .maxLength(50, 'يجب ان يكون الاسم 50 حرف كحد اقصي').rules
    },
    image: {
      value: body.image,
      rules: new Builder().required().isURL().rules
    },
    phone: {
      value: body.phone,
      rules: new Builder()
        .required('يجب ادخال رقم الهاتف')
        .isMobile('رقم هاتف غير صالح').rules
    },
    email: {
      value: body.email,
      rules: new Builder()
        .required('يجب ادخال البريد الإلكتروني')
        .isEmail('بريد إلكتروني غير صالح').rules
    },
    managerEmail: {
      value: body.managerEmail,
      rules: new Builder()
        .required('يجب ادخال البريد الإلكتروني')
        .isEmail('بريد إلكتروني غير صالح').rules
    },
    description: {
      value: body.job ? body.job.description : '',
      rules: new Builder().minLength(5).maxLength(500).rules
    },
    currency: {
      value: body.currency,
      rules: new Builder().required().isMember(currencies).rules
    },
    'address.government': {
      value: body.address ? body.address.government : '',
      rules: new Builder()
        .required()
        .minLength(3)
        .maxLength(100).rules
    },
    'address.street': {
      value: body.address ? body.address.street : '',
      rules: new Builder()
        .required()
        .minLength(10)
        .maxLength(200).rules
    },
    'address.nearTo': {
      value: body.address ? body.address.nearTo : '',
      rules: new Builder()
        .required()
        .minLength(10)
        .maxLength(200).rules
    },
    'address.highlight': {
      value: body.address ? body.address.highlight : '',
      rules: new Builder()
        .required()
        .minLength(10)
        .maxLength(200).rules
    },
    'address.houseNumber': {
      value: body.address ? body.address.houseNumber : '',
      rules: new Builder()
        .required()
        .isNumber()
        .min(1).rules
    },
    'address.apartmentNumber': {
      value: body.address ? body.address.apartmentNumber : '',
      rules: new Builder()
        .required()
        .isNumber()
        .min(1).rules
    },
    'address.floorNumber': {
      value: body.address ? body.address.floorNumber : '',
      rules: new Builder()
        .required()
        .isNumber()
        .min(1).rules
    },
    freeServices: {
      value: body.freeServices,
      rules: new Builder()
        .required()
        .isArray()
        .isMember(freeServices).rules
    },
    generalServices: {
      value: body.generalServices,
      rules: new Builder()
        .required()
        .isArray()
        .isMember(generalServices).rules
    },
    hostelServices: {
      value: body.hostelServices,
      rules: new Builder()
        .required()
        .isArray()
        .isMember(hostelServices).rules
    },
    entertainmentServices: {
      value: body.entertainmentServices,
      rules: new Builder()
        .required()
        .isArray()
        .isMember(entertainmentServices).rules
    },
    foodServices: {
      value: body.foodServices,
      rules: new Builder()
        .required()
        .isArray()
        .isMember(foodServices).rules
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
