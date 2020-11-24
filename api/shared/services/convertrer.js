/* eslint-disable no-console */
const toPdf = require('mso-pdf');

class DocxConverter {
  static async convert(inputPath, outputPath) {
    return new Promise((resolve, reject) => {
      toPdf.convert(inputPath, outputPath, errors => {
        if (errors) {
          console.log('errors converting', errors);
          return reject(errors);
        }
        return resolve(outputPath);
      });
    });
  }
}

module.exports = DocxConverter;
