const model = require('../Models');
// should have no implementation for any specific orm
module.exports = () => async ({ ids }) => {
  const recommendations = await model.getMany({
    query: { _id: { $in: ids } }
  });
  if (recommendations) {
    return recommendations;
  }
};
