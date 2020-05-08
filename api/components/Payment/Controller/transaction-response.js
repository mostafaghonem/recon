const { transactionResponse } = require('../use-case');

module.exports = () => {
  return async (req, res) => {
    try {
      const response = await transactionResponse({
        data: req.query
      });

      return res.status(200).json({
        message: 'Transaction response happended successfully!',
        response
      });
    } catch (e) {
      return res.redirect(`/error?message=${encodeURIComponent(e.message)}`);
    }
  };
};
