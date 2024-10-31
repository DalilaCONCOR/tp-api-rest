const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const enviarCorreo = (destinatario, asunto, texto) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: destinatario,
        subject: asunto,
        text: texto,
    };

    return transporter.sendMail(mailOptions);
};

module.exports = { enviarCorreo };
