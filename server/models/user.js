const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  password: String,
  isAdmin: Boolean,
  isActive: Boolean,
});
const User = mongoose.model('Category', userSchema);

module.exports = User;
