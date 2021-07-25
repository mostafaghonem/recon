const model = require('../Models');
// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger, ethicsDegrees }) => async ({
  id,
  soldier,
  soldierId,
  updateObj
}) => {
  const select = 'influences ethics ethicsHistory';
  const populate = {
    path: 'influences.influenceId',
    select: ''
  }
  const data =
    soldier || (await model.getOneByIdObjWithPopulation({ id: soldierId, populate, select }));
  if (!data) {
    throw new ApplicationError(
      'عذراً ولكن هذا المجند لايوجد بقاعدة البيانات',
      401
    );
  }
  const punishments = data.influences.map(o => o.influenceId).filter(o => o.type === 'punishment');
  if (!punishments.length) {
    return ethicsDegrees.VERY_GOOD;
  }

  const coures
  return update;
};
