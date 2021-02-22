const { Builder, ValidatorHelper } = require('validation-helpers');

module.exports = ({
  _,
  Builder,
  ValidatorHelper,
  ObjectId,
  requestResponse,
  reject
}) => ({ body }) => {
  const error = {};

  const scheme = {
    requestId: {
      value: body.requestId,
      rules: new Builder().required('You should provide requestId').rules
    },
    status: {
      value: body.status,
      rules: new Builder()
        .required('You should provide status')
        .isMember(requestResponse).rules
    },
    note: {
      value: body.note,
      rules: new Builder().rules
    }
  };

  Object.keys(scheme).forEach(key => {
    const ele = scheme[key];
    const { errors, isValid } = ValidatorHelper(ele.value, ele.rules);
    if (!isValid) error[key] = errors;
    if (key === 'requestId' && !ObjectId.isValid(ele.value))
      error[key] = ['requestId should be a valid ObjectId'];
    if (key === 'note' && !ele.value && body.status && body.status === reject)
      error[key] = ['you should provide a note'];
  });

  return { error: _.isEmpty(error) ? undefined : error };
};
