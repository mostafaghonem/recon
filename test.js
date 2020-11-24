/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const libre = require('libreoffice-convert');
const unoconv = require('awesome-unoconv');
const toPdf = require('mso-pdf');

class DocxConverter {
  static async convert(inputPath, outputPath) {
    const input = fs.readFileSync(inputPath);
    unoconv
      .convert(inputPath, outputPath)
      .then(result => {
        console.log(result); // return outputFilePath
      })
      .catch(err => {
        console.log(err);
      });
  }

  static async toPdf(inputPath, outputPath) {
    toPdf.convert(inputPath, outputPath, function(errors) {
      if (errors) console.log(errors);
      console.log(`${outputPath} converted`);
    });
  }
}

// DocxConverter.convert(
//   path.resolve('./report.docx'),
//   path.resolve('./report.pdf')
// );

DocxConverter.toPdf(
  path.resolve('./report.docx'),
  path.resolve('./report.pdf')
);
