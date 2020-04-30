const jsonwebtoken = require('jsonwebtoken');
const Promise = require('bluebird');

const jwt = Promise.promisifyAll(jsonwebtoken);

const isAuthenticated = async (req, res, next) => {
  const token =
    req.cookies.sknToken ||
    req.signedCookies.sknToken ||
    req.body['access-token'] ||
    req.query['access-token'] ||
    req.headers['access-token'];
  if (token) {
    try {
      const decoded = await jwt.verify(token, process.env.jwtPrivateKey);
      req.user = decoded;
      req.user.token = token;
      req.decoded = decoded;
      return next();
    } catch (err) {
      return res
        .status(401)
        .json({ success: false, message: 'Failed to authenticate token.' });
    }
  } else {
    return res.status(401).json({
      success: false,
      message: 'No token provided.'
    });
  }
};

module.exports = isAuthenticated;
