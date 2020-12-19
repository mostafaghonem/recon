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
    type: {
      value: query.type,
      rules: new Builder().rules
    },
    ar: {
      value: query.ar,
      rules: new Builder().rules
    },
    value: {
      value: query.value,
      rules: new Builder().rules
    },
    key: {
      value: query.key,
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
