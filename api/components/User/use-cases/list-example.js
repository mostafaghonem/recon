/* eslint-disable no-unused-vars */
//! only require Entity. any other dependencies in the wrapper
const { Entity: E, readAll: R } = require('../Entity');

// ! You can implement logic for skip and limit here 👇👇
module.exports = ({ dependencies, Entity = E, readAll = R }) => async ({
  skip,
  limit
}) => {
  // you can access readAllExamples which returns Entities
  //   const exampleEntity = Entity({});
  //   const all = await exampleEntity.readAllExamples();
  //   return all.map(entity => entity.toJson());

  // another implementation
  const all = await readAll();
  return all.map(entity => entity.toJson());

  // !Which is better and why?
};
