/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case here in index and inject it to the method wrapper
 *
 *
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

const facebookAuthService = require('./facebookAuthService');

const facebookAuth = facebookAuthService({
  passport,
  FacebookStrategy
});
const userUseCases = Object.freeze({
  facebookAuth
});

module.exports = userUseCases;
