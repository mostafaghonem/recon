// const { Builder } = require('validation-helpers');
// const { defaultConstants } = require('../../../shared/constants');

module.exports = ({ _, ValidatorHelper }) => ({ body }) => {
  const error = {};
  const scheme = {
    // type: {
    //   value: body.type,
    //   rules: new Builder()
    //     .required('يجب ادخال نوع الوحدة')
    //     .isMember(soldierTypes).rules
    // },
    // rentersType: {
    //   value: body.rentersType,
    //   rules: new Builder()
    //     .required('يجب ادخال نوع المستأجرين')
    //     .isMember(rentersType).rules
    // },
    // numberOfPeople: {
    //   value: body.numberOfPeople,
    //   rules: new Builder()
    //     .required('يجب ادخال عدد المستأجرين')
    //     .isNumber()
    //     .min(1).rules
    // },
    // numberOfRooms: {
    //   value: body.numberOfRooms,
    //   rules: new Builder()
    //     .required('يجب ادخال عدد الغرف')
    //     .isNumber()
    //     .min(1).rules
    // },
    // availableCountNow: {
    //   value: body.availableCountNow,
    //   rules: new Builder().isNumber().min(1).rules
    // },
    // pricePerPerson: {
    //   value: body.pricePerPerson,
    //   rules: new Builder().isNumber().min(1).rules
    // },
    // dailyOrMonthly: {
    //   value: body.dailyOrMonthly,
    //   rules: new Builder()
    //     .required('يجب ادخال عدد الحجز اسبوعي ام شهري')
    //     .isMember(PricePer).rules
    // },
    // image: {
    //   value: body.image,
    //   rules: new Builder().required('يجب ادخال عدد الحجز صورة أساسية للوحدة')
    //     .rules
    // },
    // description: {
    //   value: body.description,
    //   rules: new Builder()
    //     .required('يجب ادخال عدد وصف للوحدة')
    //     .minLength(5)
    //     .maxLength(500).rules
    // },
    // currency: {
    //   value: body.currency,
    //   rules: new Builder()
    //     .required('يجب ادخال العملة')
    //     .isMember(currencies, 'يجب ان تختار الدفع يومياً او شهرياً').rules
    // },
    // 'address.government': {
    //   value: body.address ? body.address.government : '',
    //   rules: new Builder()
    //     .required()
    //     .minLength(3)
    //     .maxLength(100).rules
    // },
    // 'address.street': {
    //   value: body.address ? body.address.street : '',
    //   rules: new Builder()
    //     .required('يجب ادخال الشارع')
    //     .minLength(2)
    //     .maxLength(200).rules
    // },
    // 'address.nearTo': {
    //   value: body.address ? body.address.nearTo : '',
    //   rules: new Builder()
    //     .required('يجب ادخال قريباً من')
    //     .minLength(2)
    //     .maxLength(200).rules
    // },
    // 'address.highlight': {
    //   value: body.address ? body.address.highlight : '',
    //   rules: new Builder()
    //     .required('يجب ادخال علامة مميزة')
    //     .minLength(2)
    //     .maxLength(200).rules
    // },
    // 'address.houseNumber': {
    //   value: body.address ? body.address.houseNumber : '',
    //   rules: new Builder().required('يجب ادخال رقم المنزل').rules
    // },
    // 'address.apartmentNumber': {
    //   value: body.address ? body.address.apartmentNumber : '',
    //   rules: new Builder()
    //     .required('يجب ادخال رقم الشقة')
    //     .isNumber()
    //     .min(1).rules
    // },
    // 'address.floorNumber': {
    //   value: body.address ? body.address.floorNumber : '',
    //   rules: new Builder()
    //     .required('يجب ادخال رقم الدور')
    //     .isNumber()
    //     .min(1).rules
    // }
  };

  if (body.services) {
    // body.services.forEach((url, index) => {
    //   scheme[`body.services.${index}`] = {
    //     value: url,
    //     rules: new Builder().isMember(soldierServices).rules
    //   };
    // });
  }

  Object.keys(scheme).forEach(key => {
    const ele = scheme[key];
    const { errors, isValid } = ValidatorHelper(ele.value, ele.rules);
    if (!isValid) error[key] = errors;
  });

  return {
    error: _.isEmpty(error) ? undefined : error
  };
};
