const { facebookAuth } = require('../use-cases');

exports.facebookAuthController = async (req, res, next) => {
  try {
    return facebookAuth.authenticate('facebook');

    // return res.status(200).json({ body: result });
  } catch (e) {
    return next(e);
  }
};

exports.facebookAuthController = async (req, res, next) => {
  try {
    console.log(req.query.code);
    return res;
    // req.query.code // need to deserialize this code and retrieve user id and get its data from db
    // then redirect to register form if his data not complete or redirect to home page with adding token
    // return res.status(200).json({ body: result });
  } catch (e) {
    return next(e);
  }
};
