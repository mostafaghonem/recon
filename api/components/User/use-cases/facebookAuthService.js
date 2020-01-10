// const { UserEntity } = require('../Entity');

const _passport = require('passport');
const _FacebookStrategy = require('passport-facebook').Strategy;
const { UserEntity: _UserEntity } = require('../Entity');

module.exports = ({
  passport = _passport,
  FacebookStrategy = _FacebookStrategy,
  UserEntity = _UserEntity
}) => () => {
  const fun = passport.use(
    new FacebookStrategy(
      {
        clientID: '775340076293966',
        clientSecret: '3b0be9c79d15fcdf68fbe4561d38e2b2',
        callbackURL: `${process.env.BASE_URL}/api/users/facebook-auth-back`,
        profileFields: ['id', 'emails', 'name', 'picture.type(large)', 'gender']
      },
      async (accessToken, refreshToken, profile, done) => {
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
