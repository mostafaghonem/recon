const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = mongoose.Types;

const divSchema = new Schema(
  {
    unitId: {
      type: String,
      ref: 'Division',
      required: true
    },
    divisionId: {
      type: String,
      ref: 'Division'
    },
    confirmationNumber: {
      type: String
    },
    isChangeOfUnit: {
      type: Boolean,
      default: false
    },
    joinDate: {
      type: Date
    },
    releaseDate: {
      type: Date
    }
  },
  {
    _id: false,
    timestamps: true
  }
);

module.exports = {
  divSchema
};
