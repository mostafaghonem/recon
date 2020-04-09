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

  if (query.limit) {
    // eslint-disable-next-line no-param-reassign
    query.limit = String(query.limit).split(',');
  }

  if (query.sortValue) {
    // eslint-disable-next-line no-param-reassign
    query.sortValue = String(query.sortValue).split(',');
  }

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
        .isArray('لم يتم إرسال حد صحيح')
        .minLength(2, 'يجب طلب حدين').rules
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
      rules: new Builder().isArray().minLength(2, 'حدث خطا ما فى عرض المزيد')
        .rules
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
