const { Builder, ValidatorHelper } = require('validation-helpers');
const _ = require('lodash');
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;
const { defaultConstants } = require('../../../shared/constants');
const { ErrorText } = require('../../../shared/errors');

const makeAddmailValidation = require('./add-mail-validation');
const makeDeleteMailValidation = require('./delete-mail-validation');
const makeEditMailValidation = require('./edit-mail-validation');
const makeHideMailValidation = require('./hide-mail-validation');
const makeUnhideMailValidation = require('./unhide-mail-validation');
const makeGetValidation = require('./get-mail-validation');
const makeGetMailsValidation = require('./get-mails-validation');

const sortValues = Object.values(defaultConstants.SORT_VALUES);
const sortKeys = Object.values(defaultConstants.SORT_KEYS);

module.exports.addMailValidation = makeAddmailValidation({
  _,
  ErrorText,
  ValidatorHelper,
  Builder,
  ObjectId,
  branchesList: defaultConstants.BRANCHES
});

module.exports.deleteMailValidation = makeDeleteMailValidation({
  _,
  ErrorText,
  ValidatorHelper,
  Builder,
  ObjectId
});

module.exports.hideMailValidation = makeHideMailValidation({
  _,
  ErrorText,
  ValidatorHelper,
  Builder,
  ObjectId
});

module.exports.unhideMailValidation = makeUnhideMailValidation({
  _,
  ErrorText,
  ValidatorHelper,
  Builder,
  ObjectId
});

module.exports.editMailValidation = makeEditMailValidation({
  _,
  ErrorText,
  ValidatorHelper,
  Builder,
  ObjectId
});

module.exports.getMailValidation = makeGetValidation({
  _,
  ErrorText,
  ValidatorHelper,
  Builder,
  ObjectId,
  sortValues,
  sortKeys
});

module.exports.getMailsValidation = makeGetMailsValidation({
  _,
  ErrorText,
  ValidatorHelper,
  Builder,
  ObjectId,
  sortValues,
  sortKeys
});
