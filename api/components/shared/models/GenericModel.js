module.exports = class GenericModel {
  constructor(DbAccess) {
    this.DbAccess = DbAccess;
  }

  getOne(params = { query: {}, select: '' }) {
    const { query, select } = params;
    return this.DbAccess.findOne(query, select).lean();
  }

  getOneById(params = { id: undefined, select: '' }) {
    const { id, select } = params;
    return this.DbAccess.findById(id, select).lean();
  }

  createOne(params = { document: {} }) {
    const { document } = params;
    return this.DbAccess.create(document);
  }

  getMany(
    params = {
      query: {},
      select: '',
      sort: { _id: 1 },
      skip: 0,
      limit: 10000000000,
      populate: {
        path: '',
        match: {},
        select: ''
      },
      anotherPopulate: {
        path: '',
        match: {},
        select: ''
      }
    }
  ) {
    const {
      limit,
      query,
      select,
      skip,
      sort,
      populate,
      anotherPopulate
    } = params;
    return this.DbAccess.find(query, select)
      .populate(populate)
      .populate(anotherPopulate)
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .lean();
  }

  exists(params = { filter: {} }) {
    const { filter } = params;
    return this.DbAccess.exists(filter);
  }

  count(params = { filter: {} }) {
    const { filter } = params;
    return this.DbAccess.countDocuments(filter);
  }

  upsertOneById(params = { id: undefined, update: {} }) {
    const { id, update } = params;
    return this.DbAccess.findByIdAndUpdate(id, update, {
      upsert: true,
      runValidators: true,
      new: true
    }).lean();
  }

  updateOneById(params = { id: undefined, update: {} }) {
    const { id, update } = params;
    return this.DbAccess.findByIdAndUpdate(id, update, {
      runValidators: true,
      new: true
    }).lean();
  }

  updateOneByFilter(params = { filter: {}, update: {} }) {
    const { filter, update } = params;
    return this.DbAccess.findOneAndUpdate(filter, update, {
      runValidators: true,
      new: true
    }).lean();
  }

  updateManyByFilter(params = { filter: {}, update: {} }) {
    const { filter, update } = params;
    return this.DbAccess.updateMany(filter, update, {
      runValidators: true,
      new: true
    }).lean();
  }

  deleteOneById(params = { id: {} }) {
    const { id } = params;
    return this.DbAccess.findByIdAndDelete(id).lean();
  }

  deleteOneByFilter(params = { filter: {} }) {
    const { filter } = params;
    return this.DbAccess.findOneAndDelete(filter).lean();
  }

  deleteManyByFilter(params = { filter: {} }) {
    const { filter } = params;
    return this.DbAccess.deleteMany(filter).lean();
  }

  bulkWrite(params = { queries: [] }) {
    const { queries } = params;
    return this.DbAccess.bulkWrite(queries);
  }

  getAggregate(params = { arrayOfFilter: [] }) {
    const { arrayOfFilter } = params;
    return this.DbAccess.aggregate(arrayOfFilter);
  }
};
