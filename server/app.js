require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const apiProducts = require('./routes/apiProducts');

app.listen(process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/products', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});
app.use('/api/products', apiProducts);
