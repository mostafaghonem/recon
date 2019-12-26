const makeExampleModel = require('./exampleModel');
const ExampleScheme = require('../scheme');

const commentsDb = makeExampleModel({ dbAccess: ExampleScheme });
module.exports = commentsDb;
