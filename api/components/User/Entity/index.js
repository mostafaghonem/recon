const bcjs = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
const mongoose = require('mongoose');
const Promise = require('bluebird');

const ObjectId = mongoose.Types.ObjectId;
const _ = require('lodash');

const jwt = Promise.promisifyAll(jsonwebtoken);

const { ApplicationError } = require('../../../shared/errors');

const makeUserEntity = require('./UserEntity');
const makeUserFavoriteUnitsEntity = require('./UserFavoriteUnitsEntity');
const makeUserFavoriteHostelsEntity = require('./UserFavoriteHostelsEntity');

const Entity = makeUserEntity({
  bcrypt: bcjs,
  ApplicationError,
  ObjectId,
  jwt,
  _
});

const FavoriteUnitsEntity = makeUserFavoriteUnitsEntity({
  ObjectId
});
const FavoriteHostelsEntity = makeUserFavoriteHostelsEntity({
  ObjectId
});

module.exports.UserEntity = Entity;
module.exports.UserFavoriteUnitsEntity = FavoriteUnitsEntity;
module.exports.UserFavoriteHostelsEntity = FavoriteHostelsEntity;
