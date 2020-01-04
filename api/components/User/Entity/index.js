const bcjs = require('bcryptjs');
const { ApplicationError } = require('../../../shared/errors');

const makeUserEntity = require('./UserEntity');

const Entity = makeUserEntity({
  bcryptjs: bcjs,
  ApplicationError
});

module.exports.UserEntity = Entity;
