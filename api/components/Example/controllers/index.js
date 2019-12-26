const { listExample } = require('../use-cases');
const makeGetExample = require('./get-example');

const getExample = makeGetExample({
  listExample
});

const ExampleController = Object.freeze({
  getExample
});

module.exports = ExampleController;
