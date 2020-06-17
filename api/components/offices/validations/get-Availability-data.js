// const { Builder, ValidatorHelper } = require('validation-helpers');

module.exports = ({ _, Builder, ValidatorHelper, ObjectId }) => ({ query }) => {
  const error = {};
  const scheme = {
    id: {
      value: query.id,
      rules: new Builder().required('You should provide id').rules
    },
    officeId: {
      value: query.officeId,
      rules: new Builder().required('You should provide officeId').rules
    }
  };

  Object.keys(scheme).forEach(key => {
    const ele = scheme[key];
    const { errors, isValid } = ValidatorHelper(ele.value, ele.rules);
    if (!isValid) error[key] = errors;
    if (key === 'id' && !ObjectId.isValid(ele.value))
      error[key] = ['id should be a valid ObjectId'];
    if (key === 'officeId' && !ObjectId.isValid(ele.value))
      error[key] = ['officeId should be a valid ObjectId'];
  });

  return { error: _.isEmpty(error) ? undefined : error };
};
