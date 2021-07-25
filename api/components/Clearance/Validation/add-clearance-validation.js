// const { Builder } = require('validation-helpers');
// const { defaultConstants } = require('../../../shared/constants');

module.exports = ({
  _,
  ErrorText,
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
    // soldierId: {
    //   value: body.soldierId,
    //   rules: new Builder().required(ErrorText.MILITARYID_REQUIRED).rules
    // },
    // unitId: {
    //   value: body.unitId,
    //   rules: new Builder().required(ErrorText.RECORDID_REQUIRED).rules
    // },
    // nationalId: {
    //   value: body.nationalId,
    //   rules: new Builder().required(ErrorText.NATIONALID_REQUIRED).rules
    // },
    // newUnitId: {
    //   value: body.newUnitId,
    //   rules: new Builder().rules
    // },
    // joinDate: {
    //   value: body.joinDate,
    //   rules: new Builder().required(ErrorText.BIRTHDATE_REQUIRED).rules
    // },
    // joinPlace: {
    //   value: body.joinPlace,
    //   rules: new Builder().required(ErrorText.FORCE_REQUIRED).rules
    // },
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
