/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case here in index and inject it to the method wrapper
 *
 *
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */

const makeRegisterUserUC = require('./register-user');

const registerUser = makeRegisterUserUC({});

const userUseCases = Object.freeze({
  registerUser
});

module.exports = userUseCases;
