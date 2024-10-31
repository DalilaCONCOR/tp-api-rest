const pdf = require('html-pdf');

const generarPDF = (data) => {
    const html = `<h1>Informe de Reclamo</h1><p>${JSON.stringify(data)}</p>`;
    return new Promise((resolve, reject) => {
        pdf.create(html).toBuffer((err, buffer) => {
            if (err) return reject(err);
            resolve(buffer);
        });
    });
};

module.exports = { generarPDF };
