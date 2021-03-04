const mongoose = require('mongoose');

const { Schema } = mongoose;

module.exports = () => {
  return new Schema(
    {
      firstLicenseNumber: {
        type: String
      },
      secondLicenseNumber: {
        type: String
      },
      lastCommissionDate: {
        type: Date,
        default: Date.now()
      },
      firstLicenseDate: {
        type: Date,
        default: Date.now()
      },
      secondLicenseDate: {
        type: Date,
        default: Date.now()
      }
    },
    { _id: false }
  );
};
