const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const { Schema } = mongoose;
module.exports = ({ constantTypes }) => {
  const constant = new Schema(
    {
      userId: {
        type: String,
        ref: 'User'
      },
      type: {
        type: String,
        enum: constantTypes,
        default: 'inbox'
      },
      ar: {
        type: String,
        required: true
      },
      value: {
        type: String,
        unique: true,
        required: true
      },

      isHidden: {
        type: Boolean,
        default: false
      },
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

  constant.plugin(mongoosePaginate);
  return mongoose.model('constant', constant);
};
