const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const { Schema } = mongoose;

const { ObjectId } = mongoose.Types;

module.exports = ({ divSchema }) => {
  const UnitChange = new Schema(
    {
      userId: {
        type: ObjectId,
        ref: 'User'
      },
      soldierId: {
        type: ObjectId,
        ref: 'Soldier'
      },
      unitId: {
        type: ObjectId,
        ref: 'Division'
      },
      pastUnit: divSchema,
      confirmationNumber: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now()
      },
      note: {
        type: String,
        default: ''
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
  UnitChange.plugin(mongoosePaginate);
  return mongoose.model('ChangeOfUnit', UnitChange);
};
