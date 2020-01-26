// ! we can depend on entity
const { UserEntity } = require('../Entity');

const redisClient_ = require('../../../shared/redis-client');

module.exports = ({ redis = redisClient_ }) => {
  const googleLoginSetter = async _user => {
    const user = await UserEntity.loadEntityFromDbByGoogleId(_user.id);
    if (!user) {
      // @REVIEW == too long time
      _user.fullName = _user.displayName;
      await redis.setexAsync(_user.id, 20 * 60, JSON.stringify(_user));
      return null;
    }
    const token = user.generateToken();
    return token;
  };
  const googleLoginGetter = async googleId => {
    const user = await redis.getAsync(googleId);
    if (!user) {
      return null;
    }
    return JSON.parse(user);
  };
  return { googleLoginGetter, googleLoginSetter };
};
