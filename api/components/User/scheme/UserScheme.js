const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

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
      password: {
        type: String,
        required: true
      },
      isArchived: {
        type: Boolean,
        default: false
      },
      isHidden: {
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
  User.plugin(mongoosePaginate);
  return mongoose.model('User', User);
};
