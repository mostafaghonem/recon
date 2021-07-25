module.exports = ({ Builder }) => ({ body, method }) => {
  if (method === 'add') {
    return {
      country: {
        value: body.country,
        rules: new Builder().isMongoObjectId().required('يجب ادخال بلد السفر')
          .rules
      },
      travelDate: {
        value: body.travelDate,
        rules: new Builder().required('يجب ادخال تاريخ السفر').rules
      },
      comebackDate: {
        value: body.comebackDate,
        rules: new Builder().required('يجب ادخال  تاريخ العودة').rules
      },
      travelType: {
        value: body.travelType,
        rules: new Builder().required('يجب ادخال سبب السفر').rules
      },
      confirmationNumber: {
        value: body.confirmationNumber,
        rules: new Builder().required('يجب ادخال رقم تصديق السفر').rules
      },
      confirmationDirection: {
        value: body.confirmationDirection,
        rules: new Builder().required('يجب ادخال جهة التصديق').rules
      },
      confirmationDate: {
        value: body.confirmationDate,
        rules: new Builder().required('يجب ادخال تاريخ تصديق السفر').rules
      },
      confirmationComebackDate: {
        value: body.confirmationComebackDate,
        rules: new Builder().required('يجب ادخال تاريخ تصديق العودة').rules
      },
      confirmationComebackNumber: {
        value: body.confirmationComebackNumber,
        rules: new Builder().required('يجب ادخال رقم تصديق العودة').rules
      }
    };
  }
  return {
    country: {
      value: body.country,
      rules: new Builder().rules
    },
    travelDate: {
      value: body.travelDate,
      rules: new Builder().rules
    },
    comebackDate: {
      value: body.comebackDate,
      rules: new Builder().rules
    },
    travelType: {
      value: body.travelType,
      rules: new Builder().rules
    },
    confirmationNumber: {
      value: body.confirmationNumber,
      rules: new Builder().rules
    },
    confirmationDirection: {
      value: body.confirmationDirection,
      rules: new Builder().rules
    },
    confirmationDate: {
      value: body.confirmationDate,
      rules: new Builder().rules
    },
    confirmationComebackDate: {
      value: body.confirmationComebackDate,
      rules: new Builder().rules
    },
    confirmationComebackNumber: {
      value: body.confirmationComebackNumber,
      rules: new Builder().rules
    }
  };
};
