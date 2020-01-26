// ! we can depend on entity
// const { UserEntity } = require('../Entity');

module.exports = ({ passport, GoogleStrategy }) => () => {
  const fun = passport.use(
    new GoogleStrategy(
      {
        clientID:
          '432022420515-s0poe8o2o66slora6066hncpsr5tk328.apps.googleusercontent.com' ||
          // '980985116193-e6pjausv7442ogc4mejdh6j39rappfis.apps.googleusercontent.com' ||
          process.env.GOOGLE_CONSUMER_KEY,
        clientSecret:
          'ymUc09wHHKeZWC6aB9iEZK9S' || process.env.GOOGLE_CONSUMER_SECRET,
        // 'iOW-Bgc6HUDm0AzYy4jciJac' || process.env.GOOGLE_CONSUMER_SECRET,
        callbackURL: `${process.env.BASE_URL}/api/users/google/callback`
      },
      (token, tokenSecret, profile, done) => {
        done(null, profile);
      }
    )
  );
  return fun;
};
