require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const apiProducts = require('./routes/apiProducts');
const apiCategories = require('./routes/apiCategories');
const port = process.env.PORT || 2077;

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening at localhost:${port}`));

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/products', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});
app.use('/api/products', apiProducts);
app.use('/api/categories', apiCategories);
