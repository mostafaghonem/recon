const bcjs = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
const mongoose = require('mongoose');
const Promise = require('bluebird');

const ObjectId = mongoose.Types.ObjectId;

const jwt = Promise.promisifyAll(jsonwebtoken);

const { ApplicationError } = require('../../../shared/errors');

const makeUserEntity = require('./UserEntity');

const Entity = makeUserEntity({
  bcrypt: bcjs,
  ApplicationError,
  ObjectId,
  jwt
});

module.exports.UserEntity = Entity;
