const scheme = require('../scheme');

// Should I use build model to have no requires?
const GenericModel = require('../../shared/models/GenericModel');

module.exports = class ExampleModel extends GenericModel {
  constructor({ DbAccess = scheme }) {
    super({ DbAccess });
  }

  anotherSpecificModelFunc() {
    return this.getAggregate([
      {
        complexAggs: ''
      }
    ]);
  }
};
