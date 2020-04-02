const mongoose = require('mongoose');
const moment = require('moment');

const { ObjectId } = mongoose.Types;

const getBaseDomain = () => {
  return process.env.BASE_URL
    ? process.env.BASE_URL.substring(
        process.env.BASE_URL.indexOf('.'),
        process.env.BASE_URL.length
      )
    : 'localhost';
};

const getSortValue = (key, val) => {
  try {
    if (!val) {
      return false;
    }

    if (key === '_id' && ObjectId.isValid(val)) {
      return ObjectId(val);
    }

    if (['createdAt', 'updatedAt'].includes(key) && moment(val).isValid()) {
      return moment(val).toDate();
    }
  } catch (err) {
    return false;
  }
};
//
const getSortObj = ({ sortValue, sortKey, sortIndex }) => {
  const key = sortKey || 'updatedAt';
  const index = sortIndex ? parseInt(sortIndex, 10) : -1;
  const sort = {};
  const query = {};
  const operator = parseInt(index, 10) === -1 ? '$lt' : '$gt';
  sort[key] = index;
  const value = getSortValue(key, sortValue);

  if (value) {
    query[key] = { [operator]: value };
  }
  return { query, sort };
};

module.exports = {
  getBaseDomain,
  getSortObj
};
