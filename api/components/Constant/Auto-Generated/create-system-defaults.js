/* eslint-disable no-unused-vars */
//! only require Entity/ConstantsModel
const ConstantsModel = require('../Models');
const { BRANCHES } = require('../../../shared/constants/defaults');

const influences = require('../../../shared/constants/influences');

// should have no implementation for any specific orm
module.exports = ({ logger }) => async () => {
  try {
    const items = influences;
    BRANCHES.map(branch => {
      items.push({
        value: branch.value,
        ar: branch.ar,
        type: 'branches'
      });
      // promises.push(checkOrCreateBranch(branch));
    });
    console.log('pushing default items', items.length);
    const response = await bulkUpsertInfluences(items);
  } catch (error) {
    logger.info(
      `### ERROR ### while creating Default Branches => ${error.message}`
    );
  }

  async function checkOrCreateBranch(item) {
    try {
      let branch = await ConstantsModel.getOne({
        query: {
          value: item.value,
          type: 'branches'
        }
      });

      // # create scenario (if no admin user, then create new one)
      if (!branch) {
        branch = new ConstantsModel.DbAccess({
          value: item.value,
          ar: item.ar,
          type: 'branches'
        });

        await branch.save();
        logger.info(`Branch Created with value:ar => ${item.value}:${item.ar}`);
      }
    } catch (error) {
      logger.info(
        `### ERROR ### while creating DEFAULT BRANCHE => ${error.message}`
      );
    }
  }

  async function bulkUpsertInfluences(items) {
    try {
      const response = await ConstantsModel.DbAccess.upsertMany(items);
      logger.info(
        `Default influences upserted successfully => upserted: ${response.nUpserted}, modified: ${response.nModified}`
      );
    } catch (error) {
      logger.info(
        `### ERROR ### while upserting Default influences => ${error.message}`
      );
    }
  }
};
