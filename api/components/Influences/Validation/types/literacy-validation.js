module.exports = ({ Builder, graduationLevels, governates, degrees }) => ({
  body,
  method
}) => {
  if (method === 'add') {
    return {
      literacyNumber: {
        value: body.literacyNumber,
        rules: new Builder().rules
      },
      seatNumber: {
        value: body.seatNumber,
        rules: new Builder().rules
      },
      governate: {
        value: body.governate,
        rules: new Builder()
          .isMember(governates.map(o => o.value))
          .required('يجب ادخال المحافظة').rules
      },
      graduationLevel: {
        value: body.graduationLevel,
        rules: new Builder()
          .isMember(graduationLevels.map(o => o.value))
          .required('يجب ادخال دور التخرج').rules
      },
      date: {
        value: body.date,
        rules: new Builder().required('يجب ادخال تاريخ الحصول على الدرجة').rules
      },
      degree: {
        value: body.degree,
        rules: new Builder()
          .isMember(degrees.map(o => o.value))
          .required('يجب ادخال الشهادة').rules
      },
      score: {
        value: body.score,
        rules: new Builder().rules
      }
    };
  }
  return {
    literacyNumber: {
      value: body.literacyNumber,
      rules: new Builder().rules
    },
    governate: {
      value: body.governate,
      rules: new Builder().rules
    },
    graduationLevel: {
      value: body.graduationLevel,
      rules: new Builder().isMember(graduationLevels.map(o => o.value)).rules
    },
    date: {
      value: body.date,
      rules: new Builder().rules
    },
    degree: {
      value: body.degree,
      rules: new Builder().isMember(degrees.map(o => o.value)).rules
    },
    score: {
      value: body.score,
      rules: new Builder().rules
    }
  };
};
