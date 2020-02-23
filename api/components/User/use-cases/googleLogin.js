// ! we can depend on entity
const { UserEntity } = require('../Entity');

module.exports = ({ redis }) => {
  const googleLoginSetter = async _user => {
    const user = await UserEntity.loadEntityFromDbByGoogleId(_user.id);
    if (!user) {
      console.log(
        `google-login-service-_user ${JSON.stringify(_user, undefined, 4)}`
      );

      // eslint-disable-next-line no-param-reassign
      _user.fullName = _user.displayName;
      // eslint-disable-next-line no-param-reassign
      _user.googleId = _user.id;
      // @REVIEW == too long time
      await redis.setexAsync(
        `${_user.id}-google-data`,
        20 * 60,
        JSON.stringify(_user)
      );
      return null;
    }
    const token = user.generateToken();
    return token;
  };
  const googleLoginGetter = async googleId => {
    const user = await redis.getAsync(`${googleId}-google-data`);
    if (!user) {
      return null;
    }
    return JSON.parse(user);
  };
  return { googleLoginGetter, googleLoginSetter };
};
