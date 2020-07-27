// const { Builder } = require('validation-helpers');
// const { defaultConstants } = require('../../../shared/constants');

module.exports = ({
  _,
  ValidatorHelper,
  Builder,
  armyList,
  forcesList,
  recruitmentLevels,
  educationRanks,
  situations,
  recruitmentAreas,
  governates
}) => ({ body }) => {
  const error = {};
  const scheme = {
    militaryId: {
      value: body.militaryId,
      rules: new Builder().required('يجب ادخال الرقم العسكرى').rules
    },
    recordId: {
      value: body.recordId,
      rules: new Builder().required('يجب ادخال رقم السجل').rules
    },
    tripleNumber: {
      value: body.tripleNumber,
      rules: new Builder().required('يجب ادخال الرقم المجند').rules
    },
    joinDate: {
      value: body.joinDate,
      rules: new Builder().required('يجب ادخال تاريخ الالتحاق').rules
    },
    birthDate: {
      value: body.birthDate,
      rules: new Builder().required('يجب ادخال تاريخ ميلاد المجند').rules
    },

    force: {
      value: body.force,
      rules: new Builder()
        .required('يجب ادخال سلاح المجند')
        .isMember(forcesList).rules
    },
    army: {
      value: body.army,
      rules: new Builder()
        .required('يجب ادخال الجيش الموزع به المجند')
        .isMember(armyList).rules
    },
    recruitmentLevel: {
      value: body.recruitmentLevel,
      rules: new Builder()
        .required('يجب ادخال مرحلة تجنيد المجند')
        .isMember(recruitmentLevels).rules
    },
    educationRank: {
      value: body.educationRank,
      rules: new Builder()
        .required('يجب ادخال مؤهل المجند')
        .isMember(educationRanks).rules
    },
    educationRanks: {
      value: body.educationRank,
      rules: new Builder()
        .required('يجب ادخال مؤهل المجند')
        .isMember(educationRanks).rules
    },
    situation: {
      value: body.situation,
      rules: new Builder().isMember(
        situations,
        'عذرا ولكن لم اتعرف على حالة المجند هذه'
      ).rules
    },
    recruitmentArea: {
      value: body.recruitmentArea,
      rules: new Builder().isMember(
        recruitmentAreas,
        'الرجاء التأكد من صحة منطقة التجنيد'
      ).rules
    },
    unitId: {
      value: body.unitId,
      rules: new Builder().required('يجب إدخال وحدة المجند').rules
    },
    divisionId: {
      value: body.unitId,
      rules: new Builder().rules
    },
    'address.governate': {
      value: body.address ? body.address.governate : undefined,
      rules: new Builder()
        .required('يجب ادخال المحافظة')
        .isMember(
          governates,
          'عذرا ولكن لا نستطيع إيجاد هذه المحافظة تأكد من صحتها'
        ).rules
    },
    'address.centre': {
      value: body.address ? body.address.centre : undefined,
      rules: new Builder().required('يجب ادخال المركز').rules
    },
    'address.village': {
      value: body.address ? body.address.village : undefined,
      rules: new Builder().required('يجب ادخال القرية').rules
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

// /  releaseDate: {
//       value: body.releaseDate,
//       rules: new Builder().required('يجب ادخال تاريخ إنهاء الخدمة').rules
//     },
