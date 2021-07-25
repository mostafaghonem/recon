/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError }) => async ({ divisionId }) => {
  const limit = 1000000000;
  const divisionMatch = { isHidden: false, isArchived: false };
  const divisionSelct = 'name force army type';
  const populate = [
    {
      path: 'divisionId',
      match: divisionMatch,
      select: divisionSelct
    },
    {
      path: 'brigadeId',
      match: divisionMatch,
      select: divisionSelct
    },
    {
      path: 'battalionId',
      match: divisionMatch,
      select: divisionSelct
    },
    {
      path: 'companyId',
      match: divisionMatch,
      select: divisionSelct
    }
  ];
  const select = '';
  const checkExistence = await model.getMany({
    query: { _id: divisionId },
    populate,
    select
  });
  if (!checkExistence) {
    throw new ApplicationError('.نأسف ، لا يمكننا العثور على هذه الوحدة', 403);
  }
  return checkExistence[0];
};
