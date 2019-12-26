const scheme = require('../scheme');

module.exports = ({ DbAccess = scheme }) => {
  const getOne = (query, select) => {
    return DbAccess.findOne(query, select).lean();
  };

  const getOneById = (id, select) => {
    return DbAccess.findById(id, select).lean();
  };

  const createOne = document => {
    return DbAccess.create(document).toObject();
  };

  const getMany = (
    query,
    select,
    sort = { _id: 1 },
    skip = 0,
    limit = 10000000000
  ) => {
    return DbAccess.find(query, select)
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .lean();
  };

  const exists = filter => {
    return DbAccess.exists(filter);
  };

  const count = filter => {
    return DbAccess.countDocuments(filter);
  };

  const updateOneById = (id, update) => {
    return DbAccess.findByIdAndUpdate(id, update, {
      runValidators: true,
      new: true
    }).lean();
  };

  const updateOneByFilter = (filter, update) => {
    return DbAccess.findOneAndUpdate(filter, update, {
      runValidators: true,
      new: true
    }).lean();
  };
  const updateManyByFilter = (filter, update) => {
    return DbAccess.updateMany(filter, update, {
      runValidators: true,
      new: true
    }).lean();
  };

  const deleteOne = id => {
    return DbAccess.findByIdAndDelete(id).lean();
  };

  const deleteOneByFilter = filter => {
    return DbAccess.findOneAndDelete(filter).lean();
  };

  const deleteManyByFilter = filter => {
    return DbAccess.deleteMany(filter).lean();
  };

  const bulkWrite = queries => {
    return DbAccess.bulkWrite(queries);
  };

  const getAggregate = arrayOfFilter => {
    return DbAccess.aggregate(arrayOfFilter);
  };

  return {
    getOne,
    getOneById,
    getMany,
    createOne,
    updateOneById,
    updateOneByFilter,
    updateManyByFilter,
    deleteOne,
    deleteOneByFilter,
    deleteManyByFilter,
    exists,
    count,
    bulkWrite,
    getAggregate
  };
};
