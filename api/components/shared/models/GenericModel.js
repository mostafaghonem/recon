module.exports = class GenericModel {
  constructor({ DbAccess }) {
    this.DbAccess = DbAccess;
  }

  getOne({ query, select }) {
    return this.DbAccess.findOne(query, select).lean();
  }

  getOneById({ id, select }) {
    return this.DbAccess.findById(id, select).lean();
  }

  createOne({ document }) {
    return this.DbAccess.create(document).toObject();
  }

  getMany({ query, select, sort = { _id: 1 }, skip = 0, limit = 10000000000 }) {
    return this.DbAccess.find(query, select)
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .lean();
  }

  exists({ filter }) {
    return this.DbAccess.exists(filter);
  }

  count({ filter }) {
    return this.DbAccess.countDocuments(filter);
  }

  updateOneById({ id, update }) {
    return this.DbAccess.findByIdAndUpdate(id, update, {
      runValidators: true,
      new: true
    }).lean();
  }

  updateOneByFilter({ filter, update }) {
    return this.DbAccess.findOneAndUpdate(filter, update, {
      runValidators: true,
      new: true
    }).lean();
  }

  updateManyByFilter({ filter, update }) {
    return this.DbAccess.updateMany(filter, update, {
      runValidators: true,
      new: true
    }).lean();
  }

  deleteOneById({ id }) {
    return this.DbAccess.findByIdAndDelete(id).lean();
  }

  deleteOneByFilter({ filter }) {
    return this.DbAccess.findOneAndDelete(filter).lean();
  }

  deleteManyByFilter({ filter }) {
    return this.DbAccess.deleteMany(filter).lean();
  }

  bulkWrite({ queries }) {
    return this.DbAccess.bulkWrite(queries);
  }

  getAggregate({ arrayOfFilter }) {
    return this.DbAccess.aggregate(arrayOfFilter);
  }
};
