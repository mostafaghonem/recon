// const { Builder, ValidatorHelper } = require('validation-helpers');

module.exports = ({
  _,
  Builder,
  ValidatorHelper,
  ObjectId,
  rentersType,
  unitTypes,
  PricePer,
  currencies,
  unitServices
}) => ({ query }) => {
  const error = {};
  if (query.services) {
    // eslint-disable-next-line no-param-reassign
    query.services = String(query.services).split(',');
  }

  const scheme = {
    lastId: {
      value: query.lastId,
      rules: new Builder().required('You should provide lastId').rules
    },
    availableFrom: {
      value: query.availableFrom,
      // .required('You should provide availableFrom')
      rules: new Builder().isNumber('availableFrom should be a number').rules
    },
    availableTo: {
      value: query.availableTo,
      // .required('You should provide lastId')
      rules: new Builder()
        .isNumber('lastId should be a number')
        .min(
          query.availableFrom,
          'availableFrom should be greater than or equal availableTo'
        ).rules
    },
    type: {
      value: query.type,
      rules: new Builder().isMember(rentersType).rules
    },
    rentersType: {
      value: query.rentersType,
      rules: new Builder().isMember(rentersType).rules
    },
    government: {
      value: query.government,
      rules: new Builder().minLength(3).maxLength(100).rules
    },
    numberOfPersons: {
      value: query.numberOfPersons,
      rules: new Builder()
        .isNumber('يجب ان يكون عدد الاشخاص رقم')
        .min(1, 'يجب ان يكون عدد الاشخاص 1 علي الاقل').rules
    },
    services: {
      value: query.services,
      rules: new Builder().isArray().rules
    },
    limit: {
      value: query.limit,
      rules: new Builder().rules
    },
    available: {
      value: query.available,
      rules: new Builder().isBoolean().isMember([true, false]).rules
    },
    priceFrom: {
      value: query.priceFrom,
      rules: new Builder()
        .isNumber('يجب ان يكون اقل سعر رقم')
        .min(0, 'يجب ان يكون اقل سعر 0 علي الاقل').rules
    },
    priceTo: {
      value: query.priceTo,
      rules: new Builder()
        .isNumber('يجب ان يكون اكبر سعر الفرد رقم')
        .min(0, 'يجب ان يكون اكبر سعر 0 علي الاقل').rules
    },
    rate: {
      value: query.rate,
      rules: new Builder()
        .isNumber('يجب ان يكون التقييم رقم')
        .min(1, 'يجب ان يكون التقييم 1 علي الاقل')
        .max(5, 'يجب ان يكون التقييم 5 علي الاكثر').rules
    }
  };

  if (query.freeServices) {
    query.freeServices.forEach((url, index) => {
      scheme[`query.freeServices.${index}`] = {
        value: url,
        rules: new Builder().isMember(freeServices).rules
      };
    });
  }
  if (query.generalServices) {
    query.generalServices.forEach((url, index) => {
      scheme[`query.generalServices.${index}`] = {
        value: url,
        rules: new Builder().isMember(generalServices).rules
      };
    });
  }
  if (query.entertainmentServices) {
    query.entertainmentServices.forEach((url, index) => {
      scheme[`query.entertainmentServices.${index}`] = {
        value: url,
        rules: new Builder().isMember(entertainmentServices).rules
      };
    });
  }
  if (query.hostelServices) {
    query.hostelServices.forEach((url, index) => {
      scheme[`query.hostelServices.${index}`] = {
        value: url,
        rules: new Builder().isMember(hostelServices).rules
      };
    });
  }
  if (query.foodServices) {
    query.foodServices.forEach((url, index) => {
      scheme[`query.foodServices.${index}`] = {
        value: url,
        rules: new Builder().isMember(foodServices).rules
      };
    });
  }

  Object.keys(scheme).forEach(key => {
    const ele = scheme[key];
    const { errors, isValid } = ValidatorHelper(ele.value, ele.rules);
    if (!isValid) error[key] = errors;
    if (key === 'lastId' && !ObjectId.isValid(ele.value))
      error[key] = ['lastId should be a valid ObjectId'];
    if (key === 'limit' && query.limit && _.isNaN(Number(ele.value)))
      error[key] = ['you should provide a valid limit'];
    else if (
      key === 'limit' &&
      query.limit &&
      (Number(ele.value) < 1 || Number(ele.value) > 50)
    )
      error[key] = ['limit should be between 1 and 50'];
    if (
      key === 'priceTo' &&
      query.priceTo &&
      query.priceFrom &&
      Number(ele.value) < Number(query.priceFrom)
    )
      error[key] = ['priceTo should be greater than priceFrom'];
  });

  return { error: _.isEmpty(error) ? undefined : error };
};
