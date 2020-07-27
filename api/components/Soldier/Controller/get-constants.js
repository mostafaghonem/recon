module.exports = ({ locations, defaultConstants }) => {
  return async (req, res, next) => {
    try {
      return res.status(200).json({ locations, defaultConstants });
    } catch (e) {
      return next(e);
    }
  };
};
