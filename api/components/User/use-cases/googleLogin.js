// ! we can depend on entity
const { UserEntity } = require('../Entity');

const redisClient_ = require('../../../shared/redis-client');

module.exports = ({ redis = redisClient_ }) => {
  const googleLoginSetter = async googleId => {
    const user = await UserEntity.loadEntityFromDbByGoogleId(googleId);
    if (!user) {
      // @REVIEW == too long time
      await redis.setexAsync(user.id, 20 * 60, user.toJson());
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
    return user;
  };
  return { googleLoginGetter, googleLoginSetter };
};
