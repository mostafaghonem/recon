// this require only for auto-complete
const models = require('../models');

// Inject dependency !no-requires
const buildMakeExampleEntity = ({ Model = models }) => {
  // !private
  const getEntity = dbEntity =>
    makeEntity({
      id: dbEntity._id,
      description: dbEntity.description,
      votesUp: dbEntity.votesUp,
      votesDown: dbEntity.votesDown,
      name: dbEntity.name,
      createdAt: dbEntity.createdAt,
      updatedAt: dbEntity.updatedAt
    });

  const addExample = async ({ name, description }) => {
    if (!name || !description)
      throw new Error(
        'Example Entity => addExample => name and description is required'
      );
    const dbEntity = await Model.createOne({ name, description });
    return getEntity(dbEntity);
  };

  const isDuplicate = async ({ name }) => {
    if (!name)
      throw new Error('Example Entity => isDuplicate => name is required');
    const exists = await Model.exists({ filter: { name } });
    return exists;
  };

  const readOneExampleById = async ({ id }) => {
    if (!id)
      throw new Error('Example Entity => readOneExampleById => id is required');
    const dbEntity = await Model.getOneById({ id });
    return getEntity(dbEntity);
  };

  // if you want to implement pagination put it here 👇👇
  const readAllExamples = async () => {
    const dbEntities = await Model.getMany({ limit: 20 });
    return dbEntities.map(dbEntity => getEntity(dbEntity));
  };

  const updateExample = async ({ id, newName, newDescription }) => {
    if (!newName || !newDescription || !id)
      throw new Error(
        'Example Entity => updateExample => id, name and description is required'
      );

    const dbEntity = await Model.updateOneById({
      id,
      update: { name: newName, description: newDescription }
    });
    return getEntity(dbEntity);
  };

  const deleteExampleById = async ({ id }) => {
    if (!id)
      throw new Error('Example Entity => deleteExampleById => id is required');
    await Model.deleteOneById({ id });
    return true;
  };

  //! you can also implement voteUp/Down func and expose them to the use-cases

  const makeEntity = ({
    id,
    name,
    description,
    votesUp,
    votesDown,
    createdAt,
    updatedAt
  }) => {
    // ! only expose these to the use-cases (make it simple and silly out there)
    return Object.freeze({
      getName: () => name,
      getDescription: () => description,
      getVotesUp: () => votesUp,
      getVotesDown: () => votesDown,
      getCreatedAt: () => createdAt,
      getUpdatedAt: () => updatedAt,
      isDuplicate: () => isDuplicate({ name }),
      addExample: () => addExample({ name, description }),
      updateExample: () => updateExample({ id, name, description }),
      readOneExampleById: () => readOneExampleById({ id }),
      // ! I think readAllExamples doesn't make any sense to be a member of Entity, but I'll keep it for a better solution asap
      readAllExamples: () => readAllExamples(),
      deleteExampleById: () => deleteExampleById({ id }),
      getEntityFromDbEntity: dbEntity => getEntity(dbEntity),
      toJson: () => ({
        id,
        name,
        description,
        votesUp,
        votesDown
      }),
      toJsonWithTimeStamp: () => ({
        id,
        name,
        description,
        votesUp,
        votesDown,
        createdAt,
        updatedAt
      })
    });
  };

  return Object.freeze({
    makeEntity,
    readAllExamples: () => readAllExamples()
  });
};

module.exports = buildMakeExampleEntity;
