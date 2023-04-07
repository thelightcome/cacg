const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  pool: true,
  service: process.env.EMAIL_SERVICE,
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true,
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false,
  },
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD_2X,
  },
});

const sendMail = async (mailTo, subject, message, attachments) => {
  await transporter.sendMail({
    from: process.env.EMAIL,
    to: mailTo,
    subject: subject,
    html: message,
    attachments
  });
};

module.exports = {
  sendMail
};