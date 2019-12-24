const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

module.exports = app => {
  const accessLogStream = fs.createWriteStream('logs/access.log', {
    flags: 'a'
  });

  app.use(logger('dev'));
  app.use(
    logger(
      '":method" - ":url" - "Status: :status" - ":response-time ms" - ":user-agent" - ":remote-addr" - ":date[iso]" - ":req[access_token]"',
      { stream: accessLogStream }
    )
  );
  // app.use(express.static('uploads'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(cors());
};
