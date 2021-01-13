const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
  status: Boolean,
  products: [{ product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, quantity: Number, name: String }],
  code: Number,
  sum: Number,
  specifyTheUser: { sessionId: String, user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } },
});
const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
