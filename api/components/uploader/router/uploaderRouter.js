const fs = require('fs');
const path = require('path');
const express = require('express');
const multer = require('multer');
const mime = require('mime-types');

const DocxConverter = require('../../../shared/services/convertrer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.resolve('./uploads'));
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage });
const logger = require('../../../startup/logger');

const router = express.Router();

// @ GET api/uploader/sign
// !access  USER
router.post(
  '/',
  upload.single('file'),
  /**
   * @params: {query: {'file-name': String, 'file-ext': String}}
   * @Returns: {presignedURL: 'url to use to upload your file',
   * @                   url: 'the url your file will be uploaded to'}
   */
  async (req, res) => {
    if (req.file) {
      const file = req.file;
      try {
        const outputFile = file.filename.replace('docx', 'pdf');
        const inputPath = path.join(path.resolve('./uploads/'), file.filename);
        const outputPath = path.join(path.resolve('./uploads/'), outputFile);
        const outputUrl = `/uploads/${outputFile}`;
        const response = await DocxConverter.convert(inputPath, outputPath);
        if (response) {
          fs.unlink(inputPath, () => {});
        }
        return res.status(200).json({
          data: response,
          converted: true,
          uploaded: true,
          fileName: outputFile,
          path: outputUrl
        });
      } catch (ex) {
        logger.info(
          `file-upload-failed ==>>>> ${JSON.stringify(ex, undefined, 4)}`
        );
        return res.status(500).send({ error: 'something wrong!!' });
      }
    }
  }
);

module.exports = router;
