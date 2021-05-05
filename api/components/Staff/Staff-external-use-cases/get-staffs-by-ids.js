const model = require('../Models');
// should have no implementation for any specific orm
module.exports = () => async ({ ids }) => {
  const staffs = await model.getMany({
    query: { _id: { $in: ids } }
  });
  if (staffs) {
    return staffs;
  }
  return [];
};
