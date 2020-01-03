const buildMakeExampleEntity = require('./ExampleEntity');
const models = require('../models');

const { makeEntity: ExampleEntity, readAllExamples } = buildMakeExampleEntity({
  Model: models
});

module.exports.Entity = ExampleEntity;
module.exports.readAll = readAllExamples;
