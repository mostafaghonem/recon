/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case here in index and inject it to the method wrapper
 *
 *
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */

const makeListExample = require('./list-example');

const listExample = makeListExample({ dependencies: 'example dependency lib' });

const ExampleService = Object.freeze({
  listExample
});

module.exports = ExampleService;
