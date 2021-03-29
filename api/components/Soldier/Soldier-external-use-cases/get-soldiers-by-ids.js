const model = require('../Models');
// should have no implementation for any specific orm
module.exports = () => async ({ ids }) => {
  const soldiers = await model.getMany({
    query: { _id: { $in: ids } }
  });
  if (soldiers) {
    return soldiers;
  }
};
