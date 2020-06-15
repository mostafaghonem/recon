const officesRouter = require('./router/officesRouter');
const applySubscribers = require('./subscribers');

applySubscribers();

module.exports.Router = officesRouter;
