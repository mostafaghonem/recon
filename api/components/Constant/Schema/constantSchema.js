const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const upsertMany = require('@meanie/mongoose-upsert-many');

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
      major: {
        type: String
      },
      crimeMajorCode: {
        type: String
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
      upsertMany: {
        matchFields: ['value'],
        type: 'replaceOne',
        ensureModel: true
      },
      timestamps: true,
      autoIndex: true
    }
  );

  constant.plugin(mongoosePaginate);
  mongoose.plugin(upsertMany);
  return mongoose.model('constant', constant);
};
