// const { Builder } = require('validation-helpers');
// const { defaultConstants } = require('../../../shared/constants');

module.exports = ({
  _,
  Builder,
  ValidatorHelper,
  ObjectId,
  officesTypes,
  pricePer
}) => ({ body }) => {
  const error = {};
  const scheme = {
    officeId: {
      value: body.officeId,
      rules: new Builder().required().rules
    },
    groupId: {
      value: body.groupId,
      rules: new Builder().required().rules
    },
    name: {
      value: body.name,
      rules: new Builder()
        .required('يجب ادخال الاسم')
        .minLength(2, 'يجب ان يكون الاسم 2 احرف علي الاقل')
        .maxLength(50, 'يجب ان يكون الاسم 50 حرف كحد اقصي').rules
    },
    images: {
      value: body.images,
      rules: new Builder().required('يجب ادخال الصور').isArray().rules
    },
    numberOfPersons: {
      value: body.numberOfPersons,
      rules: new Builder()
        .required('يجب ادخال عدد الاشخاص')
        .isNumber('يجب ان يكون عدد الاشخاص رقم')
        .min(1, 'يجب ان يكون عدد الاشخاص 1 علي الاقل').rules
    },
    Type: {
      value: body.Type,
      rules: new Builder()
        .required('يجب ادخال نوع الوحدة')
        .isMember(officesTypes).rules
    },
    totalRooms: {
      value: body.totalRooms,
      rules: new Builder()
        .required('يجب ادخال عدد الاماكن')
        .isNumber('يجب ان يكون عدد الاماكن رقم')
        .min(1, 'يجب ان يكون عدد الاماكن 1 علي الاقل').rules
    },
    floorNumber: {
      value: body.floorNumber,
      rules: new Builder()
        .required('يجب ادخال الدور')
        .isNumber('يجب ان يكون الدور رقم')
        .min(1, 'يجب ان يكون الدور 1 علي الاقل').rules
    },
    totalAvailableRooms: {
      value: body.totalAvailableRooms,
      rules: new Builder()
        .required('يجب ادخال عدد الاماكن المتاحة')
        .isNumber('يجب ان يكون عدد الاماكن المتاحة رقم')
        .min(1, 'يجب ان يكون عدد الاماكن المتاحة 1 علي الاقل').rules
    },
    pricePerPerson: {
      value: body.pricePerPerson,
      rules: new Builder()
        .required('يجب ادخال سعر الفرد')
        .isNumber('يجب ان يكون سعر الفرد رقم')
        .min(1, 'يجب ان يكون سعر الفرد 1 علي الاقل').rules
    },
    pricePer: {
      value: body.pricePer,
      rules: new Builder().required('يجب ادخال فتره السعر').isMember(pricePer)
        .rules
    }
  };
  // if (body.images && _.isArray(body.images)) {
  //   body.images.forEach((url, index) => {
  //     scheme[`body.images.${index}`] = {
  //       value: url,
  //       rules: new Builder().isURL('Should be a valid URL').rules
  //     };
  //   });
  // }
  if (
    body.totalRooms &&
    body.totalAvailableRooms &&
    Number(body.totalRooms) < Number(body.totalAvailableRooms)
  )
    error.totalAvailableRooms = [
      'لا يمكن ان يكون عدد الاماكن المتاحة اكبر من عدد الاماكن الكلى'
    ];

  Object.keys(scheme).forEach(key => {
    const ele = scheme[key];
    const { errors, isValid } = ValidatorHelper(ele.value, ele.rules);
    if (!isValid) error[key] = errors;
    if (key === 'officeId' && ele.value && !ObjectId.isValid(ele.value))
      error[key] = ['officeId should be a valid ObjectId'];
    if (key === 'groupId' && ele.value && !ObjectId.isValid(ele.value))
      error[key] = ['groupId should be a valid ObjectId'];
  });

  return {
    error: _.isEmpty(error) ? undefined : error
  };
};
