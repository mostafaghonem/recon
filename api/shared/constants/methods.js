const mongoose = require('mongoose');
const moment = require('moment');

const { ObjectId } = mongoose.Types;

const GetBaseDomain = () => {
  return process.env.BASE_URL
    ? process.env.BASE_URL.substring(
        process.env.BASE_URL.indexOf('.'),
        process.env.BASE_URL.length
      )
    : 'localhost';
};

const GetSortValue = (key, val) => {
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
const GetSortObj = ({ sortValue, sortKey, sortIndex }) => {
  const key = sortKey || 'updatedAt';
  const index = sortIndex ? parseInt(sortIndex, 10) : -1;
  const sort = {};
  const query = {};
  const operator = parseInt(index, 10) === -1 ? '$lt' : '$gt';
  sort[key] = index;
  const value = GetSortValue(key, sortValue);

  if (value) {
    query[key] = { [operator]: value };
  }
  return { query, sort };
};

const GetSearchObj = ({ key }) => {
  const $or = [
    {
      'address.street': { $regex: key, $options: 'i' }
    },
    {
      'address.nearTo': { $regex: key, $options: 'i' }
    },
    {
      'address.highlight': { $regex: key, $options: 'i' }
    },
    {
      'address.government': { $regex: key, $options: 'i' }
    }
  ];
  return $or;
};
module.exports = {
  GetBaseDomain,
  GetSortObj,
  GetSearchObj
};
