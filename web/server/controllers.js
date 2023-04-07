const fs = require('fs');
const { sendMail } = require('./sendMail');

const sendRequest = async (req, res) => {
  try {
    const { name, phone, email } = req.body;

    if (!phone) return res.status(400).json({ message: 'Invalid phone' });

    sendMail(process.env.MAIL_TO, 'New request', `User name: ${name || 'Empty name'}, phone: ${phone}, email: ${email}`)
      .catch(err => {
        console.log(err);
        throw err;
      });

    res.json({ message: 'Messege sended!' });
  }
  catch (err) {
    console.error(err);

    res.status(500).json({ error: `Server error` });
  }
}

const sendSummary = (req, res) => {
  try {
    const { name, phone, email, vacantion } = req.body;
    const file = req.file;

    if (!email && !phone && !vacantion && !file) return res.status(400).json({ message: 'Uncorrect data' });

    const attachments = file ? {
      filename: file.filename,
      content: fs.createReadStream(file.path)
    } : {};

    sendMail(
      process.env.MAIL_TO,
      'New resume',
      `User name: ${name || 'Empty name'}, email: ${email || 'Empty email'}, phone: ${phone || 'Empty phone'}, vacantion: ${vacantion || 'Empty vacantion'}`,
      attachments
    )
      .then(() => {
        if (file) {
          fs.unlink(file.path, (err) => {
            if (err) console.error(err);
          });
        }
      })
      .catch(err => {
        console.log(err);
        throw err;
      });

    res.json({ message: 'Messege sended!' });
  }
  catch (err) {
    console.error(err);

    res.status(500).json({ error: `Server error` });
  }
}

module.exports = {
  sendRequest,
  sendSummary
}