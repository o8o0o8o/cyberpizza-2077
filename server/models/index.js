const mongoose = require('mongoose');

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?ssl=true&retryWrites=true&w=majority&poolSize=10`,
  { useUnifiedTopology: true, useNewUrlParser: true },
);

module.exports = {
  Pizza: require('./pizzaModel'),
  Category: require('./categoriesModel'),
};
