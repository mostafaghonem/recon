const mongoose = require('mongoose');

const { Schema } = mongoose;

module.exports = ({ genderEnum, jobTypeEnum }) => {
  const User = new Schema(
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
      birthDateTs: {
        type: Number,
        required: true
      },
      gender: {
        type: String,
        required: true,
        enum: genderEnum
      },
      job: {
        type: new Schema(
          {
            type: {
              type: String,
              required: true,
              enum: jobTypeEnum
            },
            description: {
              type: String,
              required: true
            }
          },
          { _id: false }
        ),
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

  return mongoose.model('User', User);
};
