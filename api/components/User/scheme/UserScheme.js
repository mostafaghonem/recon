const mongoose = require('mongoose');

const { Schema } = mongoose;

module.exports = ({ permissions }) => {
  const User = new Schema(
    {
      fullName: {
        type: String,
        minlength: 2,
        maxlength: 50,
        trim: true,
        required: true
      },
      username: {
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
      isArchived: {
        type: Boolean,
        default: false
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
