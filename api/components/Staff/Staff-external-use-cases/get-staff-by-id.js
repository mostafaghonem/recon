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
  const staffs = await model.getMany({
    query: { _id: id },
    populate
  });
  if (staffs) {
    return staffs[0];
  }
};
