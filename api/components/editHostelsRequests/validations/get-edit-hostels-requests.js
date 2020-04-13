const { Builder, ValidatorHelper } = require('validation-helpers');

module.exports = ({
  _,
  Builder,
  ValidatorHelper,
  ObjectId,
  requestStatus
}) => ({ query }) => {
  const error = {};

  const scheme = {
    skip: {
      value: query.skip,
      rules: new Builder()
        .required('You should provide skip')
        .isNumber('skip should be a number').rules
    },
    status: {
      value: query.status,
      rules: new Builder()
        .required('You should provide status')
        .isMember(requestStatus).rules
    },
    limit: {
      value: query.limit,
      rules: new Builder().rules
    }
  };

  Object.keys(scheme).forEach(key => {
    const ele = scheme[key];
    const { errors, isValid } = ValidatorHelper(ele.value, ele.rules);
    if (!isValid) error[key] = errors;
    if (key === 'lastId' && !ObjectId.isValid(ele.value))
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
