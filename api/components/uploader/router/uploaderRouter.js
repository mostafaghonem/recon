const express = require('express');

const aws = require('aws-sdk');
const uuidv4 = require('uuid/v4');
const mime = require('mime-types');

const { signValidation } = require('../validations');
const authenticateMiddleware = require('../../../middlewares/authenticateMiddleware');
const logger = require('../../../startup/logger');

const router = express.Router();

const validateMiddleware = require('../../../middlewares/validateMiddleware');
// const controllers = require('../controllers');

const { region, awsKey, secret, bucket } = process.env;

const s3 = new aws.S3({
  accessKeyId: awsKey,
  secretAccessKey: secret,
  region
});

// @route
// @ GET api/uploader/sign
// !access  USER
router.get(
  '/sign',
  [authenticateMiddleware, validateMiddleware(signValidation)],

  /**
   * @params: {query: {'file-name': String, 'file-ext': String}}
   * @Returns: {presignedURL: 'url to use to upload your file',
   * @                   url: 'the url your file will be uploaded to'}
   */
  (req, res) => {
    const filename = req.query['file-name'];
    const fileExt = req.query['default-ext'];

    const defaultExt = fileExt;
    let extension = filename.match(/\.(\w+$)/);

    extension =
      extension && extension.length > 1 && mime.contentType(extension[1])
        ? extension[1]
        : defaultExt;

    const { contentStorageKey, contentStorageBucketName, contentType } = {
      contentStorageKey: `${uuidv4()}-${filename}`,
      contentStorageBucketName: bucket,
      contentType: mime.contentType(extension)
    };

    const params = {
      Bucket: contentStorageBucketName,
      Key: contentStorageKey,
      Expires: 60,
      ContentType: contentType,
      ACL: 'public-read'
    };

    try {
      const presignedURL = s3.getSignedUrl('putObject', params);
      return res.status(200).send({
        url: `https://${bucket}.s3.${region}.amazonaws.com/${contentStorageKey}`,
        presignedURL
      });
    } catch (ex) {
      logger.info(
        `image-upload-failed ==>>>> ${JSON.stringify(ex, undefined, 4)}`
      );
      return res.status(500).send({ error: 'something wrong!!' });
    }
  }
);

module.exports = router;
