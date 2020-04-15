const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const { Schema } = mongoose;

const UserFavoriteHostels = new Schema(
  {
    userId: {
      type: String,
      ref: 'User'
    },
    hostelId: {
      type: String,
      ref: 'Hostel'
    },
    favorite: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true,
    autoIndex: true
  }
);

UserFavoriteHostels.index(
  { userId: 1, hostelId: 1 },
  { unique: true, required: true }
);
UserFavoriteHostels.plugin(mongoosePaginate);

module.exports = mongoose.model('UserFavoriteHostels', UserFavoriteHostels);
