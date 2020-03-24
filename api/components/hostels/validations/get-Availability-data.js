// const { Builder, ValidatorHelper } = require('validation-helpers');

module.exports = ({ _, Builder, ValidatorHelper, ObjectId }) => ({ query }) => {
  const error = {};
  const scheme = {
    hostelId: {
      value: query.hostelId,
      rules: new Builder().required('You should provide hostelId').rules
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
    if (key === 'hostelId' && !ObjectId.isValid(ele.value))
      error[key] = ['hostelId should be a valid ObjectId'];
    if (key === 'roomId' && !ObjectId.isValid(ele.value))
      error[key] = ['roomId should be a valid ObjectId'];
  });

  return { error: _.isEmpty(error) ? undefined : error };
};
