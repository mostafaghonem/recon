module.exports = ({
  moment,
  _,
  Builder,
  ValidatorHelper,
  ObjectId,
  requestStatus,
  requestTypes,
  sortKeys,
  sortValues
}) => ({ query }) => {
  const error = {};

  const scheme = {
    status: {
      value: query.status,
      rules: new Builder()
        .required('You should provide status')
        .isMember(requestStatus).rules
    },
    type: {
      value: query.type,
      rules: new Builder().isMember(requestTypes).rules
    },
    limit: {
      value: query.limit,
      rules: new Builder().rules
    },
    lastTimestamp: {
      value: query.lastTimestamp,
      rules: new Builder().rules
    },
    unitId: {
      value: query.unitId,
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
    if (key === 'lastId' && !ObjectId.isValid(ele.value))
      error[key] = ['lastId should be a valid ObjectId'];

    if (key === 'unitId' && ele.value && !ObjectId.isValid(ele.value))
      error[key] = ['unitId should be a valid ObjectId'];

    if (key === 'lastTimestamp' && ele.value) {
      const message = ['lastTimestamp should be a valid number timestampe'];
      try {
        const number = parseInt(ele.value, 10);
        const isNan = _.isNaN(number);
        const valid = !isNan && moment(number).isValid();
        error[key] = !valid ? message : undefined;
      } catch (o) {
        error[key] = message;
      }
    }

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
