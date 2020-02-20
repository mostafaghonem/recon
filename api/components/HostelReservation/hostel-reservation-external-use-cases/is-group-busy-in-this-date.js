const model = require('../Models');

// eslint-disable-next-line no-unused-vars
module.exports = ({ ApplicationError, logger }) => async (
  hostelIds,
  groupIds,
  datets
) => {
  const dbRet = await model.isGroupBusyInDate({
    hostelIds,
    groupIds,
    datets
  });
  return dbRet;
};
