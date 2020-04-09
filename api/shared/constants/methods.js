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

    if (val && val instanceof Array) {
      const values = val.map(o => {
        const isValid = o !== '' && moment(o).isValid();
        if (isValid) {
          return moment(o).toDate();
        }
        return isValid;
      });
      return values || [false, false];
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
  let query = {};
  const key = sortKey || 'updatedAt';
  const index = sortIndex ? parseInt(sortIndex, 10) : -1;
  const sort = {};
  const operator = parseInt(index, 10) === -1 ? '$lt' : '$gt';
  sort[key] = index;
  const value = GetSortValue(key, sortValue);

  if (value) {
    query[key] = { [operator]: value };
  }

  if (value && value instanceof Array) {
    query = value.map(o => {
      if (o) {
        return { [key]: { [operator]: o } };
      }
      return {};
    });
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
