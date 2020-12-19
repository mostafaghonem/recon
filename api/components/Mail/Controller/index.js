const { defaultConstants } = require('../../../shared/constants');

const pagination = Object.freeze(defaultConstants.PAGINATION);

const makeAddMailCtrl = require('./add-mail');
const makeDeleteMailCtrl = require('./delete-mail');
const makeGetMailsCtrl = require('./get-mails');
const makeHideMailCtrl = require('./hide-mail');
const makeUnhideMailCtrl = require('./unhide-mail');
const makeEditMailCtrl = require('./edit-mail');
const makeGetMail = require('./get-mail');
// ->
const addMail = makeAddMailCtrl({});
const deleteMail = makeDeleteMailCtrl({});
const getMails = makeGetMailsCtrl({ pagination });
const hideMail = makeHideMailCtrl({});
const unhideMail = makeUnhideMailCtrl({});
const editMail = makeEditMailCtrl({});
const getMail = makeGetMail({});

const mailsCtrl = Object.freeze({
  addMail,
  deleteMail,
  hideMail,
  unhideMail,
  editMail,
  getMail,
  getMails
});

module.exports = mailsCtrl;
