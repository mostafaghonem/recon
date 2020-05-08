const logger = require('../../../startup/logger');

const makeCreateSystemAdmin = require('./create-system-admin');

const createSystemAdmin = makeCreateSystemAdmin({
  logger
});

const { ADMIN_PHONE, ADMIN_PASSWORD } = process.env;

module.exports = () => {
  createSystemAdmin({
    fullName: 'SKN ADMIN',
    phone: ADMIN_PHONE,
    password: ADMIN_PASSWORD
  });
};
