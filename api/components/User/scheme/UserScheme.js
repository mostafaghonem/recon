const mongoose = require('mongoose');

const { Schema } = mongoose;

module.exports = ({ genderEnum, jobTypeEnum, permissions }) => {
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
              type: String
            }
          },
          {
            _id: false
          }
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
      address: {
        type: String,
        default: ''
      },
      tempVerificationCode: String,
      facebookId: String,
      googleId: String,
      isArchived: {
        type: Boolean,
        default: false
      },
      identificationImages: [String],
      identificationStatus: {
        type: Boolean
      },
      permissions: [
        {
          type: String,
          enum: permissions
        }
      ]
    },
    {
      timestamps: true,
      autoIndex: true
    }
  );

  return mongoose.model('User', User);
};
