const mongoose = require('mongoose');
const moment = require('moment');
const _ = require('lodash');
const cities = require('./cities');
const locations = require('./locations');
const { Permissions, Branches, Links } = require('./permissions-ranks');
const {
  EDUCATION_RANKS,
  RECRUITMENT_LEVELS,
  TREATMENTS_KEYS,
  EDUCATION_RANKS_KEYS,
  BRANCHES_KEYS: BRANCHES,
  PERMISSIONS_KEYS: PERMISSIONS
} = require('./defaults');

const EducationRanks = JSON.parse(JSON.stringify(EDUCATION_RANKS));
const RecruitmentLevels = JSON.parse(JSON.stringify(RECRUITMENT_LEVELS));
const EducationRanksKeys = JSON.parse(JSON.stringify(EDUCATION_RANKS_KEYS));
const Treatments = JSON.parse(JSON.stringify(TREATMENTS_KEYS));

const { ObjectId } = mongoose.Types;

const GetCityFromKey = key => {
  const city = cities.find(
    o =>
      o.value.toLowerCase() === key.toLowerCase() ||
      o.label.toLowerCase() === key.toLowerCase()
  );
  return city;
};
const GetBaseDomain = () => {
  return process.env.BASE_URL
    ? process.env.BASE_URL.substring(
        process.env.BASE_URL.indexOf('.'),
        process.env.BASE_URL.length
      )
    : undefined;
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

const GetDateSplitObj = ({ keys, years, months }) => {
  const query = {};
  keys.map(key => {
    if (months[key]) {
      query[key] = {
        $gte: moment(months[key], 'YYYY-MM').startOf('month'),
        $lte: moment(months[key], 'YYYY-MM').endOf('month')
      };
    }
    if (years[key]) {
      query[key] = {
        $gte: moment()
          .year(years[key])
          .startOf('year'),
        $lte: moment()
          .year(years[key])
          .endOf('year')
      };
    }
  });
  return { query };
};

const GetSearchObj = ({ key }) => {
  if (key && key !== '') {
    const city = GetCityFromKey(key);
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
      },
      {
        name: { $regex: key, $options: 'i' }
      }
    ];
    if (city) {
      $or.push({
        'address.government': city.value
      });
    }
    return $or;
  }
  return false;
};

const GetRecruitmentAreaFromAddress = ({ address }) => {
  if (!governate || !address.governate) {
    return undefined;
  }
  const governate = locations.governates.find(
    o => o === address.governate.toLowerCase()
  );
  return governate.recruitment_area.value;
};

const CalculateReleaseDate = ({
  joinDate,
  recruitmentLevel,
  educationRank,
  treatment
}) => {
  EducationRanks.splice(1, 1);
  const startYear = moment(joinDate).year();
  const addedMonths = RecruitmentLevels.findIndex(
    o => o.value === recruitmentLevel
  );
  let addedYears;
  let formula = addedMonths * 3 - 1 + 3;

  if (treatment === Treatments.WITH_EXTRA_YEAR_NOT_APPLICABLE_FOR_REMOVAL) {
    formula += 2;
  }

  if (educationRank === EducationRanksKeys.ABOVE_AVERAGE) {
    addedYears = 1;
    formula += 6;
  } else {
    addedYears = EducationRanks.findIndex(o => o.value === educationRank) + 1;
  }
  const year = startYear + addedYears;
  const releaseDate = moment(joinDate)
    .year(year)
    .month(formula)
    .hour(0)
    .minute(0)
    .startOf('month')
    .add('1', 'day');
  return releaseDate;
};

const isAuthorized = ({ user, followup, branches, permissions }) => {
  let validPermissions = true;
  let validBranches = true;
  const userPermissions = user.permissions;
  const branchMasterPermission = [
    PERMISSIONS.BRANCH_HEAD,
    PERMISSIONS.MASTER_HEAD
  ];

  // Show Everything to Admin
  if (user.permissions.includes(PERMISSIONS.ADMIN)) {
    return true;
  }

  // Don't show this for any one in followup branch
  if (followup && user.branch === 'followup') {
    return false;
  }

  const permissionAuthority =
    permissions &&
    permissions.length > 0 &&
    !_.some(userPermissions, o => permissions.includes(o));

  const branchAuthority =
    branches &&
    branches.length > 0 &&
    !_.some([user.branch], o => branches.includes(o));

  const branchMasterPermissionAuthority = !_.some(userPermissions, o =>
    branchMasterPermission.includes(o)
  );

  if (
    branches &&
    branches.length &&
    !branchMasterPermissionAuthority &&
    !branchAuthority
  ) {
    return true;
  }

  if (permissions && permissions.length && permissionAuthority) {
    validPermissions = false;
  }

  if (branches && branches.length && branchAuthority) {
    validBranches = false;
  }

  if (validPermissions && validBranches) {
    return true;
  }

  return false;
};

const computeAppDrawer = ({ user }) => {
  const firstLevel = Links.filter(o => {
    const authorized = isAuthorized({
      user,
      branches: o.branches,
      permissions: o.permissions,
      followup: o.followup
    });
    return authorized;
  });
  const secondLevel = firstLevel.map(o => {
    o.items = o.items.filter(m => {
      const authorized = isAuthorized({
        user,
        branches: m.branches,
        permissions: m.permissions
      });
      return authorized;
    });
    return o;
  });
  return secondLevel;
};

const processConstants = ({ data, constantTypes }) => {
  const result = {};
  constantTypes.map(type => {
    data.map(item => {
      if (item.type === type) {
        const key = type.toUpperCase();
        if (result[key] && result[key].length) {
          result[key].push(item);
        } else {
          result[key] = [item];
        }
      }
    });
  });

  // Sorting Each Array in Constants
  Object.keys(result).map(key => {
    if (result[key].length) {
      result[key] = _.orderBy(result[key], ['ar'], ['asc']);
    }
  });
  return result;
};
module.exports = {
  GetBaseDomain,
  GetSortObj,
  GetSearchObj,
  GetDateSplitObj,
  GetRecruitmentAreaFromAddress,
  CalculateReleaseDate,
  isAuthorized,
  computeAppDrawer,
  processConstants
};
