// const { Builder } = require('validation-helpers');
// const { defaultConstants } = require('../../../shared/constants');

module.exports = ({
  _,
  ErrorText,
  ValidatorHelper,
  Builder,
  staffRanks,
  armyList,
  forcesList,
  categories,
  medicalSituations,
  governates
}) => ({ body }) => {
  const error = {};
  const scheme = {
    militaryId: {
      value: body.militaryId,
      rules: new Builder().required(ErrorText.MILITARYID_REQUIRED).rules
    },
    nationalId: {
      value: body.nationalId,
      rules: new Builder().rules
    },
    fullName: {
      value: body.fullName,
      rules: new Builder().required(ErrorText.NAME_REQUIRED).rules
    },
    medicalSituation: {
      value: body.medicalSituation,
      rules: new Builder().required(ErrorText.MEDICAL_SITUATION_REQUIRED).rules
    },
    rank: {
      value: body.rank,
      rules: new Builder()
        .required(ErrorText.RANK_REQUIRED)
        .isMember(staffRanks, ErrorText.RANK_INVALID).rules
    },
    joinDate: {
      value: body.joinDate,
      rules: new Builder().required(ErrorText.JOINDATE_REQUIRED).rules
    },
    birthDate: {
      value: body.birthDate,
      rules: new Builder().required(ErrorText.BIRTHDATE_REQUIRED).rules
    },
    rankingDate: {
      value: body.rankingDate,
      rules: new Builder().required(ErrorText.RANKINGDATE_REQUIRED).rules
    },
    category: {
      value: body.category,
      rules: new Builder().required(ErrorText.CATEGORY_REQUIRED).rules
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
