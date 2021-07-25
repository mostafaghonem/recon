/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, logger }) => async ({ ids, user }) => {
  console.log('markign seen', user.id, ' and _id', user._id);
  const filter = {
    _id: { $in: ids },
    seen: { $nin: [user.id] }
  };
  const update = {
    $push: {
      seen: user.id
    }
  };
  await model.updateManyByFilter({ filter, update });

  logger.info(`${ids.join(',')} Mail just got seen now`);
};
