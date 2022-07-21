const fs = require('fs');
const pdf = require('html-pdf');


try {
  fs.readdir('../C-HTML/arquivos', (err, data) => {
    if(err){
      console.log(err);
    }

    const block = fs.readFileSync(`../C-HTML/arquivos/${data[0]}`, 'utf8');

    var options = { format: 'Letter' };

    pdf.create(block, options).toBuffer((err, pdfBuffer) => {
      if(err){
        console.log(err);
      }

      fileName = data[0].replace('.htm', '.pdf');
      fs.writeFileSync(fileName, pdfBuffer);
      fs.rename(`../C-HTML/${fileName}`, `../C-HTML/arquivos/${fileName}`, (err) => {
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