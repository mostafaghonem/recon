const { addUnit } = require('../UseCase');

module.exports = () => {
    return async (req, res, next) => {
        try {
            const addedUnit = await addUnit({ ...req.body, userId: req.user.id });

            return res.status(200).json({
                message: 'Unit has been added successfully!',
                unitId: addedUnit
            });
        } catch (e) {
            return next(e);
        }
    };
};
