module.exports = ({ _, ValidatorHelper, Builder, ObjectId }) => ({ query }) => {
  const error = {};
  const scheme = {
    lastId: {
      value: query.lastId,
      rules: new Builder().rules
    },

    limit: {
      value: query.limit,
      rules: new Builder()
        .isNumber('لا يمكن ان يتخطى عدد الوحدات المطلوبة مئة وحدة')
        .max(100).rules
    }
  };

  Object.keys(scheme).forEach(key => {
    const ele = scheme[key];
    const { errors, isValid } = ValidatorHelper(ele.value, ele.rules);
    if (!isValid) error[key] = errors;
    if (key === 'lastId' && query.lastId && !ObjectId.isValid(ele.value))
      error[key] = [''];
  });

  return {
    error: _.isEmpty(error) ? undefined : error
  };
};
