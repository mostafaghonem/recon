const model = require('../Models');
// should have no implementation for any specific orm
module.exports = () => async ({}) => {
  const query = {
    answer: true,
    type: 'inbox',
    number: {
      $nin: '0'
    },
    $or: [
      {
        answerId: {
          $exists: false
        }
      },
      { answerId: null }
    ],
    isArchived: false,
    isHidden: false
  };
  const mails = await model.DbAccess.find(query);
  return { total: mails.length, hasNext: false, mails };
};
