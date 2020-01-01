const mongoose = require('mongoose');
const logger = require('./logger');

mongoose.Promise = Promise;

module.exports = {
  connect: () => {
    // const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;
    const { DB_HOST, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;

    const db = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

    mongoose.connect(db, { useNewUrlParser: true, poolSize: 10 }, err => {
      if (err) {
        throw err;
      }
      logger.info(`Connected to ${db}...`);
    });

    if (process.env.NODE_ENV === 'defaults') {
      mongoose.set('debug', true);
    }
  }
};
