/* eslint-disable no-unused-vars */
//! only require Entity/ConstantsModel
const ConstantsModel = require('../Models');
const { BRANCHES } = require('../../../shared/constants/defaults');

// should have no implementation for any specific orm
module.exports = ({ logger }) => async () => {
  try {
    const promises = [];
    BRANCHES.map(branch => {
      promises.push(checkOrCreateBranch(branch));
    });
    const response = await Promise.all(promises);
  } catch (error) {
    logger.info(`### ERROR ### while creating ADMIN USER => ${error.message}`);
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
};
