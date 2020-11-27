const mongoose = require("mongoose");
const pizzaSchema = new mongoose.Schema({
  name: String,
  price: Number,
});
const Pizza = mongoose.model("Pizza", pizzaSchema);

module.exports = {
  Pizza: Pizza,
};
