const model = require('../Models');
// should have no implementation for any specific orm
module.exports = () => async ({ unitId }) => {
  const recommendations = await model.getMany({
    query: { 'unit.unitId': unitId }
  });
  if (recommendations) {
    return recommendations;
  }
};
