module.exports = ({ Builder, ranks }) => ({ body, method }) => {
  if (method === 'add') {
    return {
      lowerRank: {
        value: body.lowerRank,
        rules: new Builder().isMember(ranks.map(o => o.value)).rules
      },
      higherRank: {
        value: body.higherRank,
        rules: new Builder()
          .isMember(ranks.map(o => o.value))
          .required('يجب ادخال الدرجة الجديدة').rules
      },
      date: {
        value: body.date,
        rules: new Builder().required('يجب ادخال تاريخ إلغاء الترقي ').rules
      },
      orderNumber: {
        value: body.orderNumber,
        rules: new Builder().required('يجب ادخال بند الأوامر ').rules
      },
      orderDate: {
        value: body.orderDate,
        rules: new Builder().required('يجب ادخال تاريخ بند الأوامر ').rules
      }
    };
  }
  return {
    lowerRank: {
      value: body.lowerRank,
      rules: new Builder().isMember(ranks.map(o => o.value)).rules
    },
    higherRank: {
      value: body.higherRank,
      rules: new Builder().isMember(ranks.map(o => o.value)).rules
    },
    date: {
      value: body.date,
      rules: new Builder().rules
    },
    orderNumber: {
      value: body.orderNumber,
      rules: new Builder().rules
    },
    orderDate: {
      value: body.orderDate,
      rules: new Builder().rules
    }
  };
};
