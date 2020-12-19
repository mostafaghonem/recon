module.exports = ({
  locations,
  defaultConstants,
  getConstantsFromModel,
  computeAppDrawer,
  processConstants,
  constantTypes
}) => {
  return async (req, res, next) => {
    try {
      const modelResults = await getConstantsFromModel({});
      const result = processConstants({
        data: modelResults.constants,
        constantTypes
      });
      const defaults = Object.assign(defaultConstants, result);
      return res.status(200).json({
        locations,
        defaultConstants: defaults,
        links: computeAppDrawer({ user: req.user })
      });
    } catch (e) {
      return next(e);
    }
  };
};
