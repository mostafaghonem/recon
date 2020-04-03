const Model = require('../models');

module.exports = () => async phone => {
  const result = {};
  const users = await Model.getUsersWithPhoneSearch(phone);
  users.forEach(u => {
    result[u._id.toString()] = {
      renterId: u._id,
      phone: u.phone,
      fullName: u.fullName,
      address: u.address,
      government: u.government,
      image: u.image,
      birthDateTs: u.birthDateTs,
      gender: u.gender,
      job: u.job
    };
  });

  return result;
};
