const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sendEmail = require('./api/sendEmail');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/sendEmail', sendEmail);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Serveur backend en écoute sur le port ${PORT}`);
});
