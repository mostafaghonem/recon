/* eslint-disable import/no-dynamic-require */
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const { Schema } = mongoose;
const { ObjectId } = mongoose.Types;
module.exports = ({ embeddedSchemas, influenceTypes, influenceCategories }) => {
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
      staffId: {
        type: ObjectId,
        ref: 'Staff'
      },
      type: {
        type: String,
        required: true,
        enum: influenceTypes.map(o => o.value)
      },
      category: {
        type: String,
        required: true,
        enum: influenceCategories.map(o => o.value)
      },
      date: {
        type: Date,
        default: Date.now()
      },
      notes: {
        type: String
      },
      ...embeddedSchemas,
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
