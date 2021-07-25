const model = require('../models');

module.exports = () => async ({ requestId, unitId }) => {
  const query = { unitId };
  if (requestId) {
    query._id = {
      $ne: requestId
    };
  }
  return model.DbAccess.updateMany(query, { processed: true });
};
