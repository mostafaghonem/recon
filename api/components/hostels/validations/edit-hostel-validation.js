// const { Builder } = require('validation-helpers');
// const { defaultConstants } = require('../../../shared/constants');

module.exports = ({
  _,
  ValidatorHelper,
  Builder,
  ObjectId,
  currencies,
  freeServices,
  generalServices,
  hostelServices,
  entertainmentServices,
  foodServices
}) => ({ body }) => {
  const error = {};
  const scheme = {
    hostelId: {
      value: body.hostelId,
      rules: new Builder().required('you should provide hostelId').rules
    },
    name: {
      value: body.name,
      rules: new Builder()
        .required('يجب ادخال الاسم')
        .minLength(2, 'يجب ان يكون الاسم 2 احرف علي الاقل')
        .maxLength(50, 'يجب ان يكون الاسم 50 حرف كحد اقصي').rules
    },
    image: {
      value: body.image,
      rules: new Builder().required().rules
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
      rules: new Builder().required().isArray().rules
    },
    generalServices: {
      value: body.generalServices,
      rules: new Builder().required().isArray().rules
    },
    hostelServices: {
      value: body.hostelServices,
      rules: new Builder().required().isArray().rules
    },
    entertainmentServices: {
      value: body.entertainmentServices,
      rules: new Builder().required().isArray().rules
    },
    foodServices: {
      value: body.foodServices,
      rules: new Builder().required().isArray().rules
    }
    // TODO: Edit error messages
  };

  if (body.freeServices) {
    body.freeServices.forEach((url, index) => {
      scheme[`body.freeServices.${index}`] = {
        value: url,
        rules: new Builder().isMember(freeServices).rules
      };
    });
  }
  if (body.generalServices) {
    body.generalServices.forEach((url, index) => {
      scheme[`body.generalServices.${index}`] = {
        value: url,
        rules: new Builder().isMember(generalServices).rules
      };
    });
  }
  if (body.entertainmentServices) {
    body.entertainmentServices.forEach((url, index) => {
      scheme[`body.entertainmentServices.${index}`] = {
        value: url,
        rules: new Builder().isMember(entertainmentServices).rules
      };
    });
  }
  if (body.hostelServices) {
    body.hostelServices.forEach((url, index) => {
      scheme[`body.hostelServices.${index}`] = {
        value: url,
        rules: new Builder().isMember(hostelServices).rules
      };
    });
  }
  if (body.foodServices) {
    body.foodServices.forEach((url, index) => {
      scheme[`body.foodServices.${index}`] = {
        value: url,
        rules: new Builder().isMember(foodServices).rules
      };
    });
  }

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
