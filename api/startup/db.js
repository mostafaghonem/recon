const mongoose = require('mongoose');

mongoose.Promise = Promise;

module.exports = {
  connect: () => {
    const db = process.env.MONGO_DATABASE;

    mongoose.connect(db, { useNewUrlParser: true, poolSize: 10 }, err => {
      if (err) {
        throw err;
      }
      // eslint-disable-next-line no-undef
      logger.info(`Connected to ${db}...`);
    });

    if (process.env.NODE_ENV === 'defaults') {
      mongoose.set('debug', true);
    }
  }
};
