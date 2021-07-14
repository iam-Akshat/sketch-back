const { PDFDocument } = require('pdf-lib')
const fsp = require('fs/promises');
const fs = require('fs')

const imgToPDF = async (file) => {

    return new Promise(async (resolve, reject) => {
        const pdfDoc = await PDFDocument.create()
        const imgBytes = await fsp.readFile(file.path)
        const img = await pdfDoc.embedPng(imgBytes)
        const page = pdfDoc.addPage([img.width, img.height])
        page.drawImage(img, {
            x: 0,
            y: 0,
            width: img.width,
            height: img.height
        })
        const pdfBytes = await pdfDoc.save()
        const pdfpath = file.path + '.pdf'
        let writeStream = fs.createWriteStream(pdfpath);

        writeStream.write(pdfBytes, 'binary');

        writeStream.on('finish', () => {
            console.log('saved');
            resolve(pdfpath)
        });
        writeStream.on('error', () => {
            reject('error')
        })
        writeStream.end();
    })


}

module.exports = { imgToPDF }