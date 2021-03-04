// const { Builder, ValidatorHelper } = require('validation-helpers');

module.exports = ({
  _,
  Builder,
  ValidatorHelper,
  ObjectId,
  influenceTypes,
  sortKeys,
  sortValues
}) => ({ query }) => {
  const error = {};

  const scheme = {
    key: {
      value: query.name,
      rules: new Builder().rules
    },
    type: {
      value: query.type,
      rules: new Builder().isMember(influenceTypes.map(o => o.value)).rules
    },
    influenceId: {
      value: query.influenceId,
      rules: new Builder().rules
    },
    userId: {
      value: query.userId,
      rules: new Builder().isMongoObjectId().rules
    },
    soldierId: {
      value: query.soldierId,
      rules: new Builder().isMongoObjectId().rules
    },
    date: {
      value: query.date,
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

    if (key === 'influenceId' && ele.value && !ObjectId.isValid(ele.value))
      error[key] = ['influenceId should be a valid ObjectId'];

    if (key === 'brigadeId' && ele.value && !ObjectId.isValid(ele.value))
      error[key] = ['brigadeId should be a valid ObjectId'];

    if (key === 'battalionId' && ele.value && !ObjectId.isValid(ele.value))
      error[key] = ['battalionId should be a valid ObjectId'];

    if (key === 'companyId' && ele.value && !ObjectId.isValid(ele.value))
      error[key] = ['companyId should be a valid ObjectId'];
  });

  return { error: _.isEmpty(error) ? undefined : error };
};
