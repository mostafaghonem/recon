const model = require('../Models');
// should have no implementation for any specific orm
module.exports = () => async ({ destroy, branch, user }) => {
  const query = {
    // answer: true,
    type: 'inbox',
    number: {
      $nin: '0'
    },
    isArchived: false,
    isHidden: false
  };
  if (destroy) {
    query.$or = [{ answerId: null }];
  } else {
    query.answer = true;
    query.$or = [
      {
        answerId: {
          $exists: false
        }
      },
      { answerId: null }
    ];
  }

  if (user && branch) {
    query.$and = [
      { $or: [{ branch: user.branch }, { branches: user.branch }] }
    ];
  }
  const mails = await model.DbAccess.find(query);
  return { total: mails.length, hasNext: false, mails };
};
