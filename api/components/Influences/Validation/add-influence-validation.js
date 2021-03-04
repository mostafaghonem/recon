module.exports = ({
  _,
  ValidatorHelper,
  Builder,
  ObjectId,
  influenceTypes,
  typesValidation
}) => ({ body }) => {
  const error = {};
  let scheme = {
    type: {
      value: body.type,
      rules: new Builder()
        .required('يجب ادخال نوع المؤثر')
        .isMember(influenceTypes.map(o => o.value)).rules
    },
    soldierId: {
      value: body.soldierId,
      rules: new Builder().isMongoObjectId().rules
    },
    staffId: {
      value: body.staffId,
      rules: new Builder().isMongoObjectId().rules
    },
    userId: {
      value: body.userId,
      rules: new Builder().isMongoObjectId().rules
    },
    date: {
      value: body.date,
      rules: new Builder().rules
    }
  };

  const extras = typesValidation[`${body.type}Validation`]({
    body: body[body.type] || {},
    method: 'add'
  });

  Object.assign(scheme, extras);

  scheme = Object.keys(scheme).forEach(key => {
    const ele = scheme[key];
    const { errors, isValid } = ValidatorHelper(ele.value, ele.rules);

    if (key === 'soldierId' && ele.value && !ObjectId.isValid(ele.value))
      error[key] = ['soldierId should be a valid ObjectId'];

    if (key === 'staffId' && ele.value && !ObjectId.isValid(ele.value))
      error[key] = ['staffId should be a valid ObjectId'];

    if (key === 'userId' && ele.value && !ObjectId.isValid(ele.value))
      error[key] = [' userId should be a valid ObjectId'];

    if (!isValid) error[key] = errors;
  });

  return {
    error: _.isEmpty(error) ? undefined : error
  };
};
