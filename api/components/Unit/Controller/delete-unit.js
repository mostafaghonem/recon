const { deleteUnit } = require('../UseCase');

module.exports = () => {
    return async (req, res, next) => {
        try {
            await deleteUnit(req.params.id);

            return res.status(200).json({ message: 'Unit deleted successfully!' });
        } catch (e) {
            return next(e);
        }
    };
};
