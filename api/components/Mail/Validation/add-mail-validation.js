// const { Builder } = require('validation-helpers');
// const { defaultConstants } = require('../../../shared/constants');

module.exports = ({
  _,
  ErrorText,
  ValidatorHelper,
  Builder,
  branchesList
}) => ({ body }) => {
  const error = {};
  const scheme = {
    number: {
      value: body.number,
      rules: new Builder().required(ErrorText.MAIL_NUMBER_REQUIRED).rules
    },
    date: {
      value: body.date,
      rules: new Builder().required(ErrorText.MAIL_DATE_REQUIRED).rules
    },
    adminNo: {
      value: body.adminNo,
      rules: new Builder().rules
    },
    direction: {
      value: body.direction,
      rules: new Builder().required(ErrorText.MAIL_SENDER_REQUIRED).rules
    },
    subject: {
      value: body.subject,
      rules: new Builder().required(ErrorText.MAIL_SUBJECT_REQUIRED).rules
    },
    type: {
      value: body.type,
      rules: new Builder().required(ErrorText.MAIL_TYPE_REQUIRED).rules
    },
    summary: {
      value: body.summary,
      rules: new Builder().rules
    },

    wordMule: {
      value: body.wordMule,
      rules: new Builder().required(ErrorText.MAIL_RECEIVER_REQUIRED).rules
    },
    folder: {
      value: body.recruitmentLevel,
      rules: new Builder().rules
    },
    attachments: {
      value: body.attachments,
      rules: new Builder().rules
    }
  };

  if (body.branches) {
    const processed = body.branches.filter(o =>
      branchesList.find(m => m.value === o)
    );
    // eslint-disable-next-line no-param-reassign
    body.branches = processed;
  }

  Object.keys(scheme).forEach(key => {
    const ele = scheme[key];
    const { errors, isValid } = ValidatorHelper(ele.value, ele.rules);
    if (
      key === 'attachments' &&
      (!body[key] || (body[key] && !body[key].length))
    ) {
      error[key] = ErrorText.MAIL_ATTACHMENTS_REQUIRED;
    }
    if (!isValid) error[key] = errors;
  });

  return {
    error: _.isEmpty(error) ? undefined : error
  };
};

// /  releaseDate: {
//       value: body.releaseDate,
//       rules: new Builder().required('يجب ادخال تاريخ إنهاء الخدمة').rules
//     },
