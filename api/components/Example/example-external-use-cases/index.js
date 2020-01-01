/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case
 *
 *
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */

const makeExternalExample = require('./external-example');

const exampleExternal = makeExternalExample({
  dependencies: 'example dependency lib'
});

const ExampleExternalService = Object.freeze({
  exampleExternal
});

module.exports = ExampleExternalService;
