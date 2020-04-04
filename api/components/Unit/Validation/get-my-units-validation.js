module.exports = ({
  _,
  ValidatorHelper,
  Builder,
  ObjectId,
  requestStatus,
  sortKeys,
  sortValues
}) => ({ query }) => {
  const error = {};
  const scheme = {
    lastId: {
      value: query.lastId,
      rules: new Builder().rules
    },
    status: {
      value: query.status,
      rules: new Builder().isMember(
        requestStatus,
        'يجب ان تكون حالة الطلب من ضمن مقبول او مرفوض او لم يحدد بعد'
      ).rules
    },
    limit: {
      value: query.limit,
      rules: new Builder()
        .isNumber('لا يمكن ان يتخطى عدد الوحدات المطلوبة مئة وحدة')
        .max(100).rules
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
    if (key === 'lastId' && query.lastId && !ObjectId.isValid(ele.value))
      error[key] = [''];
  });

  return {
    error: _.isEmpty(error) ? undefined : error
  };
};
