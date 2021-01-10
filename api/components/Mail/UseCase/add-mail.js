/* eslint-disable no-unused-vars */
//! only require Entity/model
const { MailEntity } = require('../Entity');
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({
  ApplicationError,
  logger,
  createMailEvent,
  events
}) => async ({
  user,
  type,
  category,
  number,
  date,
  adminNo,
  direction,
  subject,
  summary,
  mailType,
  branch,
  branches,
  wordMule,
  directionWordMule,
  folder,
  attachments,
  answer,
  answerDate,
  isHidden,
  isArchived
}) => {
  const userId = user.id;

  const mail = {
    type,
    category,
    userId,
    number,
    date,
    adminNo,
    direction,
    subject,
    summary,
    branch,
    branches,
    mailType,
    wordMule,
    directionWordMule,
    folder,
    attachments,
    answer,
    answerDate,
    isHidden,
    isArchived
  };

  if (type === 'outbox') {
    mail.status = 'accepted';
  }

  try {
    const newMail = await model.createOne({ document: mail });

    logger.info(
      `new Mail just been added with data => \n${JSON.stringify(
        newMail,
        undefined,
        6
      )}`
    );
    return newMail.id;
  } catch (err) {
    if (err.message && err.message.includes('duplicate')) {
      throw new ApplicationError(
        'عذراً ولكن هذه المكاتبة مسجلة بالفعل فى قاعدة البيانات',
        401
      );
    } else {
      // eslint-disable-next-line no-console
      console.log('eror in adding mail', err.message);
      throw new ApplicationError(
        'حدث خطاً ما اثناء ادخال المجند لقاعدة البيانات الرجاء التواصل مع مسئول النظم',
        401
      );
    }
  }

  // await createMailEvent({
  //   userId,
  //   mailId: newMail.id,
  //   mail: newMail.toJson(),
  //   eventType: events.UNITS_REQUEST_ADD_UNIT
  // });
};
