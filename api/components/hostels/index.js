const hostelsRouter = require('./router/hostelsRouter');
const applySubscribers = require('./subscribers');

applySubscribers();

module.exports.Router = hostelsRouter;
