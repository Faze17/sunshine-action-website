const express = require('express');
const admin = require('firebase-admin');
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/ADMIN.html');
});

app.get('/exit', (req, res) => {
  res.status(200).end();
  setTimeout(() => { process.exit() }, 100);
});