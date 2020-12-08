require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

const apiProducts = require('./routes/apiProducts');
const apiCategories = require('./routes/apiCategories');
const apiUser = require('./routes/apiUser');
const cookieMonster = require('./middleware/cookieMonster');
const port = process.env.PORT || 2077;

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening at localhost:${port}`));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieMonster);
app.use('/api/products', apiProducts);
app.use('/api/categories', apiCategories);
app.use('/api/user/', apiUser);
app.get('/*', async function (req, res) {
  await res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

module.exports.app = app;
