module.exports = ({ Builder }) => ({ body, method }) => {
  if (method === 'add') {
    return {
      courseType: {
        value: body.courseType,
        rules: new Builder().required('يجب ادخال الدورة').rules
      },
      courseNumber: {
        value: body.courseNumber,
        rules: new Builder().required('يجب ادخال رقم الدورة  ').rules
      },
      courseName: {
        value: body.courseName,
        rules: new Builder().required('يجب ادخال إسم الدورة').rules
      },
      courseCollege: {
        value: body.courseCollege,
        rules: new Builder().required('يجب ادخال المعهد او المركز  ').rules
      },
      from: {
        value: body.from,
        rules: new Builder().required('يجب ادخال تاريخ بداية الدورة').rules
      },
      to: {
        value: body.to,
        rules: new Builder().required('يجب ادخال تاريخ نهاية الدورة').rules
      },
      orderNumber: {
        value: body.orderNumber,
        rules: new Builder().required('يجب ادخال بند الاوامر').rules
      },
      orderDate: {
        value: body.orderDate,
        rules: new Builder().required('يجب ادخال تاريخ بند الاوامر').rules
      },
      score: {
        value: body.score,
        rules: new Builder().rules
      }
    };
  }
  return {
    courseType: {
      value: body.courseType,
      rules: new Builder().rules
    },
    courseNumber: {
      value: body.courseNumber,
      rules: new Builder().rules
    },
    courseName: {
      value: body.courseName,
      rules: new Builder().rules
    },
    courseCollege: {
      value: body.courseCollege,
      rules: new Builder().rules
    },
    from: {
      value: body.from,
      rules: new Builder().rules
    },
    to: {
      value: body.to,
      rules: new Builder().rules
    },
    orderNumber: {
      value: body.orderNumber,
      rules: new Builder().rules
    },
    orderDate: {
      value: body.orderDate,
      rules: new Builder().rules
    },
    score: {
      value: body.score,
      rules: new Builder().rules
    }
  };
};
