const model = require('../Models');
// should have no implementation for any specific orm
module.exports = () => async ({ id }) => {
  const constant = await model.getOneById({ id });
  return constant;
};
