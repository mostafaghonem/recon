const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const { Schema } = mongoose;
const { ObjectId } = mongoose.Types;

module.exports = ({ clearanceStatuses, soldierStatuses }) => {
  const Clearance = new Schema(
    {
      userId: {
        type: String,
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
      newUnitId: { type: ObjectId, ref: 'Division' },
      newUnitType: {
        type: String,
        default: 'inside_of_force'
      },
      joinDate: {
        type: Date,
        default: Date.now()
      },
      joinPlace: {
        type: ObjectId,
        ref: 'Constant'
      },
      clearanceStatus: {
        type: String,
        enum: clearanceStatuses.map(o => o.value)
      },
      soldierStatus: {
        type: String,
        enum: soldierStatuses.map(o => o.value)
      },
      departureDate: {
        type: Date
      },
      notes: String,
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

  Clearance.plugin(mongoosePaginate);
  return mongoose.model('Clearance', Clearance);
};
