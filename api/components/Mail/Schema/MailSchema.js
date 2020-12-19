const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);
const { Schema } = mongoose;
module.exports = ({ requestStatus, pendingStatus, branchesList }) => {
  const Mail = new Schema(
    {
      userId: {
        type: String,
        ref: 'User'
      },
      type: {
        type: String,
        enum: ['inbox', 'outbox'],
        default: 'inbox'
      },
      mailType: {
        type: String
      },
      seq: {
        type: Number
      },
      number: {
        type: Number
      },
      date: {
        type: Date,
        default: Date.now()
      },
      adminNo: {
        type: Number
      },
      direction: {
        type: String,
        required: true
      },
      subject: {
        type: String
      },
      summary: {
        type: String
      },
      branches: [
        {
          type: String,
          enum: branchesList.map(o => o.value)
        }
      ],
      wordMule: {
        type: String
      },
      folder: {
        type: String,
        ref: 'Folder'
      },
      answer: {
        type: Boolean,
        default: false
      },
      answerDate: {
        type: Date
      },
      actions: [],
      history: [],
      attachments: [
        {
          link: String,
          name: String
        }
      ],
      seen: {
        type: Boolean,
        default: false
      },
      delievered: {
        type: Boolean,
        default: false
      },
      status: {
        type: String,
        enum: requestStatus,
        default: pendingStatus
      },
      isHidden: {
        type: Boolean,
        default: false
      },
      isFiled: {
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

  Mail.index({ number: 1, date: 1 }, { required: true, unique: true });
  Mail.plugin(mongoosePaginate);
  Mail.plugin(autoIncrement.plugin, { model: 'Mail', field: 'seq' });
  return mongoose.model('Mail', Mail);
};
