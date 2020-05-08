// const { transactionResponse } = require('../use-case');

module.exports = () => {
  return async (req, res, next) => {
    try {
      // const response = await transactionResponse({
      //   data: req.body.obj
      // });
      return res.status(200).json({});
    } catch (e) {
      return res.redirect(`/error?message=${encodeURIComponent(e.message)}`);
    }
  };
};
