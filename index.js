const fs = require('fs');
const htmltopdf = require('html-pdf-node');

try {
  fs.readdir('../ConvertPDF/arquivos', (err, data) => {
    if(err){
      console.log(err);
    }

    const block = fs.readFileSync(`../ConvertPDF/arquivos/${data[0]}`, 'utf8');

    let options = { format: 'A4' };

    let file = { content: block };
    htmltopdf.generatePdf(file, options).then(pdfBuffer => {
      fileName = data[0].replace('.htm', '.pdf');
      fs.writeFileSync(fileName, pdfBuffer);
      fs.rename(`../ConvertPDF/${fileName}`, `../ConvertPDF/arquivos/${fileName}`, (err) => {
        if(err){
          console.log(err);
        }

        fs.unlink(`arquivos/${data[0]}`, (err) => {
          if(err){
            console.log(err);
          }

          console.log("Done");
        })
      });
    });
  });

} catch (err) {
  console.error(err);
}