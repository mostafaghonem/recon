const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const { Schema } = mongoose;

const { ObjectId } = mongoose.Types;

module.exports = ({ unitSchema, requestStatus, requestTypes }) => {
  const UnitSchema = new Schema(unitSchema.schema.paths, { _id: false });
  const uploadedUnitRequest = new Schema(
    {
      userId: {
        type: ObjectId,
        ref: 'User'
      },
      unitId: {
        type: ObjectId,
        ref: 'Unit'
      },
      type: {
        type: String,
        default: requestTypes.ADD
      },
      update: {
        type: UnitSchema
      },
      status: {
        type: String,
        default: requestStatus.PENDING,
        enum: requestStatus
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
  uploadedUnitRequest.plugin(mongoosePaginate);
  return mongoose.model('UploadedUnitsRequests', uploadedUnitRequest);
};
