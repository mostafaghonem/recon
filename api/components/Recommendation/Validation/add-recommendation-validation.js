// const { Builder } = require('validation-helpers');
// const { defaultConstants } = require('../../../shared/constants');

module.exports = ({
  _,
  ErrorText,
  ValidatorHelper,
  Builder,
  recruitmentLevels,
  recruitmentAreas
}) => ({ body }) => {
  const error = {};
  const scheme = {
    type: {
      value: body.type,
      rules: new Builder().required().rules
    },
    militaryId: {
      value: body.militaryId,
      rules: new Builder().rules
    },
    recordId: {
      value: body.recordId,
      rules: new Builder().rules
    },
    nationalId: {
      value: body.nationalId,
      rules: new Builder().rules
    },
    tripleNumber: {
      value: body.tripleNumber,
      rules: new Builder().rules
    },
    force: {
      value: body.force,
      rules: new Builder().required(ErrorText.FORCE_REQUIRED).rules
    },
    recruitmentLevel: {
      value: body.recruitmentLevel,
      rules: new Builder()
        .required(ErrorText.RECRUITMENT_LEVEL_REQUIRED)
        .isMember(recruitmentLevels, ErrorText.RECRUITMENT_LEVEL_INVALID).rules
    },
    education: {
      value: body.education,
      rules: new Builder().required(ErrorText.EDUCATION_RANK_REQUIRED).rules
    },
    recruitmentArea: {
      value: body.recruitmentArea,
      rules: new Builder().isMember(
        recruitmentAreas,
        ErrorText.RECRUITMENT_AREA_INVALID
      ).rules
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
