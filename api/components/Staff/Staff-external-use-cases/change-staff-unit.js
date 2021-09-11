const model = require('../Models');
// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger }) => async ({ id, unit }) => {
  const update = await model.updateOneById({
    id,
    update: {
      $set: {
        unit,
        army: unit.army
      },
      $push: {
        units: unit
      }
    }
  });
  return update;
};
