module.exports = ({ locations, defaultConstants, computeAppDrawer }) => {
  return async (req, res, next) => {
    try {
      return res.status(200).json({
        locations,
        defaultConstants,
        links: computeAppDrawer({ user: req.user })
      });
    } catch (e) {
      return next(e);
    }
  };
};
