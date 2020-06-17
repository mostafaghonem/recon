const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const { Schema } = mongoose;

const UserFavoriteOffices = new Schema(
  {
    userId: {
      type: String,
      ref: 'User'
    },
    officeId: {
      type: String,
      ref: 'Office'
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

UserFavoriteOffices.index(
  { userId: 1, officeId: 1 },
  { unique: true, required: true }
);
UserFavoriteOffices.plugin(mongoosePaginate);

module.exports = mongoose.model('UserFavoriteOffices', UserFavoriteOffices);
