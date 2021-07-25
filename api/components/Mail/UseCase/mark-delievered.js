/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, logger }) => async ({ ids, user }) => {
  const filter = {
    _id: { $in: ids },
    delievered: { $not: { $regex: user.id } }
  };
  const update = {
    $push: {
      delievered: user.id
    }
  };
  await model.updateManyByFilter({ filter, update });

  logger.info(`${ids.join(',')} Mail just got delievered now`);
};
