const model = require('../Models');
// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger }) => async ({
  id,
  influenceId,
  updateObj
}) => {
  const update = await model.updateOneById({
    id,
    update: {
      $push: {
        influences: {
          influenceId
        }
      },
      $set: updateObj
    }
  });
  return update;
};
