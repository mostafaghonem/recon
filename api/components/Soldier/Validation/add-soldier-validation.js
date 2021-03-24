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
    militaryId: {
      value: body.militaryId,
      rules: new Builder().required(ErrorText.MILITARYID_REQUIRED).rules
    },
    recordId: {
      value: body.recordId,
      rules: new Builder().required(ErrorText.RECORDID_REQUIRED).rules
    },
    nationalId: {
      value: body.nationalId,
      rules: new Builder().required(ErrorText.NATIONALID_REQUIRED).rules
    },
    tripleNumber: {
      value: body.tripleNumber,
      rules: new Builder().required(ErrorText.TRIPLENUMBER_REQUIRED).rules
    },
    joinDate: {
      value: body.joinDate,
      rules: new Builder().required(ErrorText.JOINDATE_REQUIRED).rules
    },
    birthDate: {
      value: body.birthDate,
      rules: new Builder().required(ErrorText.BIRTHDATE_REQUIRED).rules
    },

    force: {
      value: body.force,
      rules: new Builder()
        .required(ErrorText.FORCE_REQUIRED)
        .isMember(forcesList, ErrorText.FORCE_INVALID).rules
    },
    army: {
      value: body.army,
      rules: new Builder().isMember(armyList, ErrorText.ARMY_INVALID).rules
    },
    recruitmentLevel: {
      value: body.recruitmentLevel,
      rules: new Builder()
        .required(ErrorText.RECRUITMENT_LEVEL_REQUIRED)
        .isMember(recruitmentLevels, ErrorText.RECRUITMENT_LEVEL_INVALID).rules
    },
    educationRank: {
      value: body.educationRank,
      rules: new Builder()
        .required(ErrorText.EDUCATION_RANK_REQUIRED)
        .isMember(educationRanks, ErrorText.EDUCATION_RANK_INVALID).rules
    },
    situation: {
      value: body.situation,
      rules: new Builder().isMember(situations, ErrorText.SITUATION_INVALID)
        .rules
    },
    recruitmentArea: {
      value: body.recruitmentArea,
      rules: new Builder().isMember(
        recruitmentAreas,
        ErrorText.RECRUITMENT_AREA_INVALID
      ).rules
    },
    unitId: {
      value: body.unitId,
      rules: new Builder().rules
    },
    divisionId: {
      value: body.unitId,
      rules: new Builder().rules
    },
    'address.governate': {
      value: body.address ? body.address.governate : undefined,
      rules: new Builder()
        .required(ErrorText.GOVERNATE_REQUIRED)
        .isMember(governates, ErrorText.GOVERNATE_INVALID).rules
    },
    'address.centre': {
      value: body.address ? body.address.centre : undefined,
      rules: new Builder().required(ErrorText.CENTRE_REQUIRED).rules
    },
    'address.village': {
      value: body.address ? body.address.village : undefined,
      rules: new Builder().required(ErrorText.VILLAGE_REQUIRED).rules
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
