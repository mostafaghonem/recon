// const { Builder } = require('validation-helpers');
// const { defaultConstants } = require('../../../shared/constants');

module.exports = ({ _, Builder, ValidatorHelper, ObjectId, roomsStatus }) => ({
  body
}) => {
  const error = {};
  const scheme = {
    officeId: {
      value: body.officeId,
      rules: new Builder().required().rules
    },
    groupId: {
      value: body.groupId,
      rules: new Builder().required().rules
    },
    totalRooms: {
      value: body.totalRooms,
      rules: new Builder()
        .required('يجب ادخال عدد الاماكن')
        .isNumber('يجب ان يكون عدد الاماكن رقم')
        .min(1, 'يجب ان يكون عدد الاماكن 1 علي الاقل').rules
    },
    status: {
      value: body.status,
      rules: new Builder().required('يجب ادخال الحالة').isMember(roomsStatus)
        .rules
    }
  };

  Object.keys(scheme).forEach(key => {
    const ele = scheme[key];
    const { errors, isValid } = ValidatorHelper(ele.value, ele.rules);
    if (!isValid) error[key] = errors;
    if (key === 'officeId' && ele.value && !ObjectId.isValid(ele.value))
      error[key] = ['officeId should be a valid ObjectId'];
    if (key === 'groupId' && ele.value && !ObjectId.isValid(ele.value))
      error[key] = ['groupId should be a valid ObjectId'];
  });

  return {
    error: _.isEmpty(error) ? undefined : error
  };
};
