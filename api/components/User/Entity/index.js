const bcjs = require('bcryptjs');

const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;

const { ApplicationError } = require('../../../shared/errors');

const makeUserEntity = require('./UserEntity');

const Entity = makeUserEntity({
  bcrypt: bcjs,
  ApplicationError,
  ObjectId
});

module.exports.UserEntity = Entity;
