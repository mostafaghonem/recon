const { transactionProcess } = require('../use-case');

module.exports = ({ logger }) => {
  return async (req, res, next) => {
    try {
      logger.info(
        `The Request body for transaction process => \n${JSON.stringify(
          req.body,
          undefined,
          6
        )}`
      );

      logger.info(
        `The Request query for transaction process => \n${JSON.stringify(
          req.query,
          undefined,
          6
        )}`
      );
      const response = await transactionProcess({
        ...req.body
      });

      return res.status(200).json({
        message: 'Transaction process happended successfully!',
        response
      });
    } catch (e) {
      return next(e);
    }
  };
};
