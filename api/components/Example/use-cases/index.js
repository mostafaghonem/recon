const makeListExample = require('./list-example');
const model = require('../models');

const listExample = makeListExample({ model });

const commentService = Object.freeze({
  listExample
});

module.exports = commentService;
