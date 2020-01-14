// ! we can depend on entity
const { UserEntity } = require('../Entity');

const redisClient_ = require('../../../shared/redis-client');

module.exports = ({ redis = redisClient_ }) => {
  const loginService = async facebookId => {
    const user = await UserEntity.loadEntityFromDbByFacebookId(facebookId);
    if (!user) {
      // @REVIEW == too long time
      await redis.setexAsync(user.id, 20 * 60, user.toJson());
      return null;
    }
    const token = user.generateToken();
    return token;
  };
  const facebookLoginService = async facebookId => {
    const user = await redis.getAsync(facebookId);
    if (!user) {
      return null;
    }
    return user;
  };
  return { loginService, facebookLoginService };
};
