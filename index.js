const fs = require('fs');
const pdf = require('html-pdf');


try {
  fs.readdir('../C-HTML/arquivos', (err, data) => {
    if(err){
      console.log(err);
    }
    var blockReplaced = "";
    const block = fs.readFileSync(`../C-HTML/arquivos/${data[0]}`, 'utf8');

    blockReplaced = block.replace("Á","&Aacute;");
    blockReplaced = block.replace("á","&aacute;");
    blockReplaced = block.replace("Â","&Acirc;");
    blockReplaced = block.replace("â","&acirc;");
    blockReplaced = block.replace("À","&Agrave;");
    blockReplaced = block.replace("à","&agrave;");
    blockReplaced = block.replace("Å","&Aring;");
    blockReplaced = block.replace("å","&aring;");
    blockReplaced = block.replace("Ã","&Atilde;");
    blockReplaced = block.replace("ã","&atilde;");
    blockReplaced = block.replace("Ä","&Auml;");
    blockReplaced = block.replace("ä","&auml;");
    blockReplaced = block.replace("Æ","&AElig;");
    blockReplaced = block.replace("æ","&aelig;");
    blockReplaced = block.replace("É","&Eacute;");
    blockReplaced = block.replace("é","&eacute;");
    blockReplaced = block.replace("Ê","&Ecirc;");
    blockReplaced = block.replace("ê","&ecirc;");
    blockReplaced = block.replace("È","&Egrave;");
    blockReplaced = block.replace("è","&egrave;");
    blockReplaced = block.replace("Ë","&Euml;");
    blockReplaced = block.replace("ë","&euml;");
    blockReplaced = block.replace("Í","&Iacute;");
    blockReplaced = block.replace("í","&iacute;");
    blockReplaced = block.replace("í","&iacute;");
    blockReplaced = block.replace("Ó","&Oacute;");
    blockReplaced = block.replace("ó","&oacute;");
    blockReplaced = block.replace("Ô","&Ocirc;");
    blockReplaced = block.replace("ô","&ocirc;");
    blockReplaced = block.replace("Õ","&Otilde;");
    blockReplaced = block.replace("õ","&otilde;");
    blockReplaced = block.replace("Ú","&Uacute;");
    blockReplaced = block.replace("ú","&uacute;");
    blockReplaced = block.replace("Ç","&Ccedil;");
    blockReplaced = block.replace("ç","&ccedil;");

    var options = { format: 'A4', orientation: "landscape" };

    pdf.create(blockReplaced, options).toBuffer((err, pdfBuffer) => {
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