const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

const model = require('../Models');
// should have no implementation for any specific orm
module.exports = () => async ({ id }) => {
  const populate = {
    path: 'influences',
    model: 'Influence',
    match: {},
    select: ''
  };
  const soldiers = await model.getMany({
    query: { _id: id },
    populate
  });
  if (soldiers) {
    return soldiers[0];
  }
};
