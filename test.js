// /* eslint-disable no-console */
// const fs = require('fs');
// const path = require('path');
// const libre = require('libreoffice-convert');
// const unoconv = require('awesome-unoconv');
// const toPdf = require('mso-pdf');

// class DocxConverter {
//   static async convert(inputPath, outputPath) {
//     const input = fs.readFileSync(inputPath);
//     unoconv
//       .convert(inputPath, outputPath)
//       .then(result => {
//         console.log(result); // return outputFilePath
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }

//   static async toPdf(inputPath, outputPath) {
//     toPdf.convert(inputPath, outputPath, function(errors) {
//       if (errors) console.log(errors);
//       console.log(`${outputPath} converted`);
//     });
//   }
// }

// // DocxConverter.convert(
// //   path.resolve('./report.docx'),
// //   path.resolve('./report.pdf')
// // );

// DocxConverter.toPdf(
//   path.resolve('./report.docx'),
//   path.resolve('./report.pdf')
// );

const fs = require('fs');
const { TemplateHandler } = require('easy-template-x');

testing();

async function testing() {
  // 1. read template file
  const templateFile = fs.readFileSync('./template.docx');

  const data = {
    "total": "100",
    "s": [
      {
        "situation": "without",
        "index": "1",
        "tripleNumber": {
          "year": "1997",
          "value": "1997\/78\/841"
        },
        "address": {
          "governate": "cairo",
          "centre": "ق المعادي",
          "village": "ثكنات المعادي"
        },
        "militaryId": "2020128600928",
        "recordId": "320254",
        "fullName": "بسام عمرو ابراهيم مصطفى",
        "unit": {
          "unitId": {
            "name": "ك 9 استطلاع"
          }
        },
        "joinDate": "2020-07-15",
        "birthDate": "1997-07-27",
        "recruitmentLevel": "third",
        "recruitmentArea": "cairo",
        "educationRank": "high"
 
      },
      {
        "situation": "without",
        "index": "2",
        "tripleNumber": {
          "year": "1997",
          "value": "1997\/78\/841"
        },
        "address": {
          "governate": "cairo",
          "centre": "ق المعادي",
          "village": "ثكنات المعادي"
        },
        "militaryId": "2020128600928",
        "recordId": "320254",
        "fullName": "بسام عمرو ابراهيم مصطفى",
        "unit": {
          "unitId": {
            "name": "ك 9 استطلاع"
          }
        },
        "joinDate": "2020-07-15",
        "birthDate": "1997-07-27",
        "recruitmentLevel": "third",
        "recruitmentArea": "cairo",
        "educationRank": "high"
      }
    ]
  };

  const handler = new TemplateHandler();
  const doc = await handler.process(templateFile, data);

  // 3. save output
  fs.writeFileSync('template-output.docx', doc);
}
