require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const apiProducts = require('./routes/apiProducts');

app.listen(process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', indexRouter);
app.use('/api/products', apiProducts);
