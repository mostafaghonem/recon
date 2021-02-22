module.exports = ({ _, ValidatorHelper, Builder, ObjectId }) => ({ body }) => {
  const error = {};
  const scheme = {
    soldierId: {
      value: body.soldierId,
      rules: new Builder().required().rules
    },
    unitId: {
      value: body.unitId,
      rules: new Builder().required().rules
    }
  };

  Object.keys(scheme).forEach(key => {
    const ele = scheme[key];
    const { errors, isValid } = ValidatorHelper(ele.value, ele.rules);
    if (!isValid) error[key] = errors;

    if (key === 'soldierId' && ele.value && !ObjectId.isValid(ele.value))
      error[key] = ['soldierId should be a valid ObjectId'];

    if (key === 'unitId' && ele.value && !ObjectId.isValid(ele.value))
      error[key] = ['unitId should be a valid ObjectId'];
  });

  return {
    error: _.isEmpty(error) ? undefined : error
  };
};
