const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const { Schema } = mongoose;
const { ObjectId } = mongoose.Types;
module.exports = ({ divisionTypes, forcesList, armyList }) => {
  const Division = new Schema(
    {
      userId: {
        type: ObjectId,
        ref: 'User'
      },
      name: {
        type: String,
        required: true,
        unique: true
      },
      type: {
        type: String,
        required: true,
        enum: divisionTypes
      },
      divisionId: {
        // فرقة
        type: ObjectId,
        ref: 'Division'
      },
      brigadeId: {
        // لواء
        type: ObjectId,
        ref: 'Division'
      },
      battalionId: {
        // كتيبة
        type: ObjectId,
        ref: 'Division'
      },
      companyId: {
        // سرية
        type: ObjectId,
        ref: 'Division'
      },
      force: {
        type: String,
        enum: forcesList.map(o => o.value)
      },
      army: {
        type: String,
        enum: armyList.map(o => o.value)
      },
      isEditing: {
        type: Boolean,
        default: false
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

  Division.plugin(mongoosePaginate);
  return mongoose.model('Division', Division);
};
