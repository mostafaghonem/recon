const { listExample } = require('../use-cases');
const makeGetExamples = require('./get-examples');

const getExampleList = makeGetExamples({
  listExample
});

const ExampleController = Object.freeze({
  getExampleList
});

module.exports = ExampleController;
