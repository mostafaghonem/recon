const mongoose = require('mongoose');
const { defaults: defaultsConstants } = require('../../../shared/constants');

const { Schema } = mongoose;

const Example = new Schema(
  {
    fullName: {
      type: String,
      minlength: 2,
      maxlength: 50,
      trim: true,
      required: true
    },
    phone: {
      type: String,
      unique: true,
      trim: true,
      required: true
    },
    verifyPhone: {
      type: Boolean,
      default: false
    },
    email: {
      type: String,
      unique: true,
      trim: true
      // required: true
    },
    verifyEmail: {
      type: Boolean,
      default: false
    },
    bithDateTs: {
      type: Number,
      required: true
    },
    gender: {
      type: String,
      required: true,
      enum: Object.values(defaultsConstants.GENDER_TYPES)
    },
    job: {
      type: new Schema({
        type: {
          type: String,
          required: true,
          enum: Object.values(defaultsConstants.JOB_TYPES)
        },
        description: {
          type: String,
          required: true
        }
      }),
      required: true
    },
    government: {
      type: String,
      required: true
    },
    image: {
      type: String
      // required: true
    },
    password: {
      type: String,
      required: true
    },
    tempVerificationCode: String,

    isArchived: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
    autoIndex: true
  }
);

module.exports = mongoose.model('Example', Example);
