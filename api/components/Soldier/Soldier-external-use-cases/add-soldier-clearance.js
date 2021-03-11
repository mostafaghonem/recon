const model = require('../Models');
// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger }) => async ({
  id,
  clearanceId
}) => {
  const update = await model.updateOneById({
    id,
    update: {
      $set: {
        clearance: {
          clearanceId
        }
      }
    }
  });
  return update;
};
