const mongoose = require('mongoose');
const categoriesSchema = new mongoose.Schema({
  name: String,
  isEnabled: Boolean,
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
});
const Category = mongoose.model('Category', categoriesSchema);

module.exports = Category;
