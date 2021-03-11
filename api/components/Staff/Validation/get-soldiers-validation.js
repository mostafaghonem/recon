// const { Builder, ValidatorHelper } = require('validation-helpers');

module.exports = ({
  _,
  ErrorText,
  Builder,
  ValidatorHelper,
  ObjectId,
  armyList,
  forcesList,
  recruitmentLevels,
  educationRanks,
  situations,
  recruitmentAreas,
  governates,
  sortKeys,
  sortValues
}) => ({ query }) => {
  const error = {};
  if (query.services) {
    // eslint-disable-next-line no-param-reassign
    query.services = String(query.services).split(',');
  }

  const scheme = {
    lastId: {
      value: query.lastId,
      rules: new Builder().rules
    },
    militaryId: {
      value: query.militaryId,
      rules: new Builder().rules
    },
    recordId: {
      value: query.recordId,
      rules: new Builder().rules
    },
    tripleNumber: {
      value: query.tripleNumber,
      rules: new Builder().rules
    },
    joinDate: {
      value: query.joinDate,
      rules: new Builder().rules
    },
    birthDate: {
      value: query.birthDate,
      rules: new Builder().rules
    },
    releaseDate: {
      value: query.joinDate,
      rules: new Builder().rules
    },
    force: {
      value: query.force,
      rules: new Builder().isMember(forcesList, ErrorText.FORCE_INVALID).rules
    },
    army: {
      value: query.army,
      rules: new Builder().isMember(armyList, ErrorText.ARMY_INVALID).rules
    },
    recruitmentLevel: {
      value: query.recruitmentLevel,
      rules: new Builder().isMember(
        recruitmentLevels,
        ErrorText.RECRUITMENT_LEVEL_INVALID
      ).rules
    },
    educationRank: {
      value: query.educationRank,
      rules: new Builder().isMember(
        educationRanks,
        ErrorText.EDUCATION_RANK_INVALID
      ).rules
    },
    situation: {
      value: query.situation,
      rules: new Builder().isMember(situations, ErrorText.SITUATION_INVALID)
        .rules
    },
    recruitmentArea: {
      value: query.recruitmentArea,
      rules: new Builder().isMember(
        recruitmentAreas,
        ErrorText.RECRUITMENT_AREA_INVALID
      ).rules
    },
    unit: {
      value: query.unit,
      rules: new Builder().rules
    },
    governate: {
      value: query.governate,
      rules: new Builder().isMember(governates, ErrorText.GOVERNATE_INVALID)
        .rules
    },
    centre: {
      value: query.centre,
      rules: new Builder().rules
    },
    village: {
      value: query.village,
      rules: new Builder().rules
    },
    sortKey: {
      value: query.sortKey,
      rules: new Builder().isMember(sortKeys).rules
    },
    sortIndex: {
      value: query.sortIndex,
      rules: new Builder().isNumber().isMember(sortValues).rules
    },
    sortValue: {
      value: query.sortValue,
      rules: new Builder().rules
    }
  };

  Object.keys(scheme).forEach(key => {
    const ele = scheme[key];
    const { errors, isValid } = ValidatorHelper(ele.value, ele.rules);
    if (!isValid) error[key] = errors;
    if (key === 'lastId' && ele.value && !ObjectId.isValid(ele.value))
      error[key] = ['lastId should be a valid ObjectId'];
    if (key === 'limit' && query.limit && _.isNaN(Number(ele.value)))
      error[key] = ['you should provide a valid limit'];
    else if (
      key === 'limit' &&
      query.limit &&
      (Number(ele.value) < 1 || Number(ele.value) > 50)
    )
      error[key] = ['limit should be between 1 and 50'];
  });

  return { error: _.isEmpty(error) ? undefined : error };
};
