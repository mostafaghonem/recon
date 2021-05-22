const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const { Schema } = mongoose;
module.exports = ({
  requestStatus,
  pendingStatus,
  recommendationsType,
  recruitmentAreas
}) => {
  const Recommendation = new Schema(
    {
      userId: {
        type: String,
        ref: 'User'
      },
      militaryId: {
        type: String,
        minlength: 13,
        maxlength: 13
      },
      type: {
        type: String,
        required: true,
        enum: recommendationsType.map(o => o.value)
      },
      recordId: {
        type: String
      },
      nationalId: {
        type: String
      },
      fullName: {
        type: String,
        required: true
      },
      recruitmentArea: {
        type: String,
        enum: recruitmentAreas.map(o => o.value)
      },
      tripleNumber: String,
      force: {
        type: String
      },
      recruitmentLevel: {
        type: String
      },
      education: {
        type: String
      },
      unit: {
        type: String
      },
      recommender: {
        type: String
      },
      notes: {
        type: String
      },
      status: {
        type: String,
        enum: requestStatus,
        default: pendingStatus
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
  // Recommendation.index({ tripleNumber: 1, type: 1 }, { unique: true });
  // Recommendation.index({ militaryId: 1, type: 1 }, { unique: true });
  // Recommendation.index({ recordId: 1, type: 1 }, { unique: true });

  Recommendation.plugin(mongoosePaginate);
  return mongoose.model('Recommendation', Recommendation);
};
