require('dotenv').config();
const express = require('express');
const path = require('path');

const { upload } = require("./upload-file-api");

const { sendRequest, sendSummary } = require('./controllers');

const PORT = process.env.PORT || 5000;

const app = express();

app.use('/', express.static(path.join(__dirname, 'dist')));
app.get('*', (_, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.post('/api/sendRequest', express.json(), sendRequest);

app.post('/api/sendSummary', express.json({ extended: true }), upload.single('file'), sendSummary);

app.listen(PORT, (err) => {
  if (err) console.error(err);
  else console.log(`Server started on port ${PORT}`);
});