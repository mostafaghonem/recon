// ! we can depend on entity
// const { UserEntity } = require('../Entity');

module.exports = ({ passport, GoogleStrategy }) => () => {
  const fun = passport.use(
    // clientID: '980985116193-e6pjausv7442ogc4mejdh6j39rappfis.apps.googleusercontent.com' for local
    // clientSecret: iOW-Bgc6HUDm0AzYy4jciJac  for local
    new GoogleStrategy(
      {
        clientID:
          process.env.GOOGLE_CONSUMER_KEY ||
          '432022420515-s0poe8o2o66slora6066hncpsr5tk328.apps.googleusercontent.com',
        clientSecret:
          process.env.GOOGLE_CONSUMER_SECRET || 'ymUc09wHHKeZWC6aB9iEZK9S',
        callbackURL: `${process.env.BASE_URL}api/users/google/callback`
      },
      (token, tokenSecret, profile, done) => {
        done(null, profile);
      }
    )
  );
  return fun;
};
