const { getChangesOfUnit } = require('../use-cases');

module.exports = ({ pagination, pending }) => {
  return async (req, res, next) => {
    try {
      const status = req.query.status || pending;
      const limit = Number(req.query.limit) || Number(pagination.LIMIT);
      const lastId = req.query.lastId || String(pagination.LAST_ID);
      const unitId = req.query.unitId;
      const key = req.query.key || '';
      const { changes, hasNext, total } = await getChangesOfUnit({
        status,
        key,
        limit,
        lastId,
        unitId,
        type: req.query.type,
        lastTimestamp: req.query.lastTimestamp,
        sortIndex: req.query.sortIndex,
        sortValue: req.query.sortValue,
        sortKey: req.query.sortKey
      });

      return res.status(200).json({
        success: true,
        changes: changes || [],
        total: total || 0,
        hasNext: hasNext || false
      });
    } catch (e) {
      return next(e);
    }
  };
};
