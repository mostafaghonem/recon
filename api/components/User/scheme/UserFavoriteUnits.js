const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const { Schema } = mongoose;

const UserFavoriteUnits = new Schema(
  {
    userId: {
      type: String,
      ref: 'USER'
    },
    unitId: {
      type: String,
      ref: 'Unit'
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

UserFavoriteUnits.index(
  { userId: 1, unitId: 1 },
  { unique: true, required: true }
);
UserFavoriteUnits.plugin(mongoosePaginate);

module.exports = mongoose.model('UserFavoriteUnits', UserFavoriteUnits);
