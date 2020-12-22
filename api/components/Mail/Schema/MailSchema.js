const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);
const { Schema } = mongoose;
module.exports = ({ requestStatus, pendingStatus, branchesList }) => {
  const CounterSchema = Schema({
    _id: { type: String, required: true },
    inboxSeq: { type: Number, default: 0 },
    outboxSeq: { type: Number, default: 0 }
  });

  const Counter = mongoose.model('Counter', CounterSchema);

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
      category: {
        type: String
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
      decision: {
        type: String
      },
      branches: [
        {
          type: String
        }
      ],
      branch: {
        type: String
      },
      wordMule: {
        type: String
      },
      directionWordMule: {
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
      mailActions: Schema.Types.Mixed,
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

  Mail.pre('save', function(next) {
    const doc = this;
    const updateKey = `${doc.type}Seq`;
    const obj = { [updateKey]: 1 };
    Counter.findByIdAndUpdate(
      { _id: 'entityId' },
      { $inc: obj },
      { upsert: true, new: true },
      (error, counter) => {
        if (error) return next(error);
        doc.seq = counter[updateKey];
        next();
      }
    );
  });

  Mail.index({ number: 1, date: 1 }, { required: true, unique: true });
  Mail.plugin(mongoosePaginate);
  return mongoose.model('Mail', Mail);
};
