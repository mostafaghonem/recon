// const { Builder } = require('validation-helpers');
// const { defaultConstants } = require('../../../shared/constants');

module.exports = ({
  _,
  ValidatorHelper,
  Builder,
  ObjectId,
  influenceTypes,
  forcesList,
  armyList
}) => ({ body }) => {
  const error = {};
  const scheme = {
    name: {
      value: body.name,
      rules: new Builder().required('يجب ادخال إسم الوحدة').rules
    },
    type: {
      value: body.type,
      rules: new Builder()
        .required('يجب ادخال نوع الوحدة')
        .isMember(influenceTypes.map(o => o.value)).rules
    },
    influenceId: {
      value: body.influenceId,
      rules: new Builder().rules
    },
    brigadeId: {
      value: body.brigadeId,
      rules: new Builder().rules
    },
    battalionId: {
      value: body.battalionId,
      rules: new Builder().rules
    },
    companyId: {
      value: body.companyId,
      rules: new Builder().rules
    },
    force: {
      value: body.force,
      rules: new Builder()
        .required('يجب إدخال سلاح الوحدة')
        .isMember(forcesList).rules
    },
    army: {
      value: body.army,
      rules: new Builder().required('يجب إدخال جيش الوحدة').isMember(armyList)
        .rules
    }
  };

  Object.keys(scheme).forEach(key => {
    const ele = scheme[key];
    const { errors, isValid } = ValidatorHelper(ele.value, ele.rules);

    if (key === 'influenceId' && ele.value && !ObjectId.isValid(ele.value))
      error[key] = ['influenceId should be a valid ObjectId'];

    if (key === 'brigadeId' && ele.value && !ObjectId.isValid(ele.value))
      error[key] = ['brigadeId should be a valid ObjectId'];

    if (key === 'battalionId' && ele.value && !ObjectId.isValid(ele.value))
      error[key] = ['battalionId should be a valid ObjectId'];

    if (key === 'companyId' && ele.value && !ObjectId.isValid(ele.value))
      error[key] = ['companyId should be a valid ObjectId'];

    if (!isValid) error[key] = errors;
  });

  return {
    error: _.isEmpty(error) ? undefined : error
  };
};
