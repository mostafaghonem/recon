// const { UserEntity } = require('../Entity');

const passport_ = require('passport');
const FacebookStrategy_ = require('passport-facebook').Strategy;

module.exports = ({
  passport = passport_,
  FacebookStrategy = FacebookStrategy_
}) => async () => {
  return passport.use(
    new FacebookStrategy(
      {
        clientID: '775340076293966',
        clientSecret: '3b0be9c79d15fcdf68fbe4561d38e2b2',
        callbackURL: `${process.env.BASE_URL}/api/user/facebook-auth-back`,
        profileFields: ['id', 'emails', 'name', 'picture.type(large)', 'gender']
      },
      (accessToken, refreshToken, profile, done) => {
        console.log(accessToken, refreshToken, profile, done);
        done(null, profile);

        // {
        //   id: '2480920598848772',
        //   username: undefined,
        //   displayName: undefined,
        //   name: { familyName: 'Salah', givenName: 'Mohamed', middleName: undefined },
        //   gender: undefined,
        //   profileUrl: undefined,
        //   photos: [
        //     {
        //       value: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2480920598848772&height=200&width=200&ext=1581015790&hash=AeSgt0qtl50BYkpI'
        //     }
        //   ],
        //   provider: 'facebook',
        //   _raw: '{"id":"2480920598848772","last_name":"Salah","first_name":"Mohamed","picture":{"data":{"height":200,"is_silhouette":false,"url":"https:\\/\\/platform-lookaside.fbsbx.com\\/platform\\/profilepic\\/?asid=2480920598848772&height=200&width=200&ext=1581015790&hash=AeSgt0qtl50BYkpI","width":200}}}',
        //   _json: {
        //     id: '2480920598848772',
        //     last_name: 'Salah',
        //     first_name: 'Mohamed',
        //     picture: { data: [Object] }
        //   }
        // }
      }
    )
  );
};
