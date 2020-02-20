const model = require('../Models');

// eslint-disable-next-line no-empty-pattern
module.exports = ({}) => async (hostelIds, groupIds, datets) => {
  const dbRet = await model.isGroupBusyInDate({
    hostelIds,
    groupIds,
    datets
  });
  return dbRet;
};
