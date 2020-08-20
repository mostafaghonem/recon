const model = require('../Models');
// should have no implementation for any specific orm
module.exports = () => async ({ id }) => {
  const soldier = await model.getOneById({ id });
  return soldier;
};
