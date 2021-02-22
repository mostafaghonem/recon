const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const { Schema } = mongoose;
const { ObjectId } = mongoose.Types;
module.exports = ({ influenceTypes, crimeTitles, forcesList, armyList }) => {
  const Influence = new Schema(
    {
      userId: {
        type: ObjectId,
        ref: 'User'
      },
      soldierId: {
        type: ObjectId,
        ref: 'Soldier'
      },
      type: {
        type: String,
        required: true,
        enum: influenceTypes.map(o => o.value)
      },
      crime: {
        title: crimeTitles.map(o => o.value),
        startDate: {
          type: Date,
          default: Date.now()
        },
        endDate: {
          type: Date,
          default: Date.now()
        },
        orderNumber: {
          type: String
        },
        orderDate: {
          type: Date,
          default: Date.now()
        },
        absencePeriod: {
          from: Date,
          to: Date
        },
        text: {
          type: String
        }
      },
      deduction: {},
      date: {
        type: Date,
        default: Date.now()
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

  Influence.plugin(mongoosePaginate);
  return mongoose.model('Influence', Influence);
};
