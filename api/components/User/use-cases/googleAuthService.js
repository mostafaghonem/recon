const _passport = require('passport');
const _GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// ! we can depend on entity
const { UserEntity } = require('../Entity');

module.exports = ({
  passport = _passport,
  GoogleStrategy = _GoogleStrategy
}) => () => {
  const fun = passport.use(
    new GoogleStrategy(
      {
        clientID:
          '980985116193-e6pjausv7442ogc4mejdh6j39rappfis.apps.googleusercontent.com' ||
          process.env.GOOGLE_CONSUMER_KEY,
        clientSecret:
          'iOW-Bgc6HUDm0AzYy4jciJac' || process.env.GOOGLE_CONSUMER_SECRET,
        callbackURL: '/api/users/google/callback'
      },
      function(token, tokenSecret, profile, done) {
        done(null, profile);
      }
    )
  );
  return fun;
};
