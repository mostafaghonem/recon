const model = require('../Models');

// eslint-disable-next-line no-empty-pattern
module.exports = ({}) => async (hostelId, fromts) => {
  const query = {
    hostelId,
    fromts: { $gte: fromts }
  };
  const dbRet = await model.getOne({ query });
  return dbRet;
};
