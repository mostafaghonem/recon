// ! we can depend on entity
const { UserEntity } = require('../Entity');

module.exports = ({ redis }) => {
  const loginService = async _user => {
    const user = await UserEntity.loadEntityFromDbByFacebookId(
      _user.facebookId
    );
    if (!user) {
      // @REVIEW == too long time
      await redis.setexAsync(
        `${_user.id}-fb-data`,
        20 * 60,
        JSON.stringify(_user)
      );
      return null;
    }
    const token = user.generateToken();
    return token;
  };
  const faceBookData = async facebookId => {
    const user = await redis.getAsync(`${facebookId}-fb-data`);
    if (!user) {
      return null;
    }
    return JSON.parse(user);
  };
  return { loginService, faceBookData };
};
