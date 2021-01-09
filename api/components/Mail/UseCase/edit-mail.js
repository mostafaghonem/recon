/* eslint-disable no-unused-vars */
//! only require Entity/model
const model = require('../Models');

// should have no implementation for any specific orm

module.exports = ({ ApplicationError, logger }) => async ({
  user,
  mailId,
  category,
  number,
  date,
  adminNo,
  direction,
  subject,
  summary,
  mailType,
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
  const filter = { _id: mailId, isArchived: false };
  const checkExistence = await model.exists({ filter });
  if (!checkExistence)
    throw new ApplicationError(
      '.نأسف ، لا يمكننا العثور على هذه المكاتبة',
      403
    );
  const update = {
    category,
    date,
    adminNo,
    direction,
    subject,
    summary,
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
  await model.updateOneById({
    id: mailId,
    update
  });

  logger.info(`${mailId} Mail updated Successfully`);
};
