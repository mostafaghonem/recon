const userRouter = require('./router/userRouter');
const applyAutoGenerated = require('./auto-generated');

applyAutoGenerated();

module.exports.Router = userRouter;
