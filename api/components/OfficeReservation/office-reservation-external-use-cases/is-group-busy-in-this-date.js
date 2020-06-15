const model = require('../Models');

// eslint-disable-next-line no-empty-pattern
module.exports = ({}) => async (officeIds, groupIds, datets) => {
  const dbRet = await model.isGroupBusyInDate({
    officeIds,
    groupIds,
    datets
  });
  return dbRet;
};
