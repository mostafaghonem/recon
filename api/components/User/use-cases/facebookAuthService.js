// ! we can depend on entity
const { UserEntity } = require('../Entity');

module.exports = ({ passport, FacebookStrategy }) => () => {
  const fun = passport.use(
    // @REVIEW == store in env and update documentation
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_CLIENT_ID || '775340076293966',
        clientSecret:
          process.env.FACEBOOK_CLIENT_SECRET ||
          '3b0be9c79d15fcdf68fbe4561d38e2b2',
        callbackURL: `${process.env.BASE_URL}/api/users/facebook-auth-back`,
        profileFields: ['id', 'emails', 'name', 'picture.type(large)', 'gender']
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log(
          `face-book-auth-service-profile ${JSON.stringify(
            profile,
            undefined,
            4
          )}`
        );

        const user = new UserEntity({
          facebookId: profile.id,
          fullName: `${profile.name.givenName} ${profile.name.familyName}`,
          image: profile.photos[0].value
        });
        done(null, user.toJson());
      }
    )
  );
  return fun;
};
