const model = require('../Models');
// should have no implementation for any specific orm
module.exports = () => async ({ id }) => {
  const mail = await model.getOneById({ id });
  return mail;
};
