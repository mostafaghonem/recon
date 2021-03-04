module.exports = ({ Builder }) => ({ body, method }) => {
  if (method === 'add') {
    return {
      noticeNumber: {
        value: body.noticeNumber,
        rules: new Builder().required('يجب ادخال رقم إخطار الهروب').rules
      },
      noticeDate: {
        value: body.noticeDate,
        rules: new Builder().required('يجب ادخال تاريخ إخطار الهروب').rules
      },
      noticeArrivalDate: {
        value: body.noticeArrivalDate,
        rules: new Builder().required('يجب ادخال تاريخ وصول إخطار الهروب').rules
      },
      abscenseDate: {
        value: body.abscenseDate,
        rules: new Builder().required('يجب ادخال تاريخ الغياب ').rules
      },
      removalDate: {
        value: body.removalDate,
        rules: new Builder().required('يجب ادخال تاريخ الشطب').rules
      }
    };
  }
  return {
    noticeNumber: {
      value: body.noticeNumber,
      rules: new Builder().rules
    },
    noticeDate: {
      value: body.noticeDate,
      rules: new Builder().rules
    },
    noticeArrivalDate: {
      value: body.noticeArrivalDate,
      rules: new Builder().rules
    },
    abscenseDate: {
      value: body.abscenseDate,
      rules: new Builder().rules
    },
    removalDate: {
      value: body.removalDate,
      rules: new Builder().rules
    }
  };
};
