// const { Builder, ValidatorHelper } = require('validation-helpers');

module.exports = ({ _, Builder, ValidatorHelper, ObjectId }) => ({ query }) => {
  const error = {};
  const scheme = {
    id: {
      value: query.id,
      rules: new Builder().required('You should provide id').rules
    },
    roomId: {
      value: query.roomId,
      rules: new Builder().required('You should provide roomId').rules
    }
  };

  Object.keys(scheme).forEach(key => {
    const ele = scheme[key];
    const { errors, isValid } = ValidatorHelper(ele.value, ele.rules);
    if (!isValid) error[key] = errors;
    if (key === 'id' && !ObjectId.isValid(ele.value))
      error[key] = ['id should be a valid ObjectId'];
    if (key === 'roomId' && !ObjectId.isValid(ele.value))
      error[key] = ['roomId should be a valid ObjectId'];
  });

  return { error: _.isEmpty(error) ? undefined : error };
};
